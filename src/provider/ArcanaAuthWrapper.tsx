import { useUserActions } from '@/hooks/User.hooks';
import { AuthService } from '@/services';
import { authState } from '@/stores';
import { timeout } from '@/utils/Misc';
import { notification } from 'antd';
import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  children: React.ReactNode;
}
const ArcanaAuthWrapper: FC<Props> = ({ children }) => {
  const [, setAuth] = useRecoilState(authState);
  const userActions = useUserActions();

  async function signMessage() {
    const authInstance = await AuthService.getAuth();
    const user = await authInstance.getUser();
    const nonce = await (await userActions.nonce()).data;
    const signature = (await AuthService.personalSign(
      nonce,
      user.address
    )) as string;
    const accessToken = await (
      await userActions.login({
        message: nonce,
        signature,
        address: user.address,
      })
    ).data.data.token;
    if (!user) {
      return;
    }
    setAuth({
      address: user.address,
      name: (user.name as string) || 'User',
      email: user.email!!,
      avatar: user?.picture,
      accessToken,
    });
  }

  useEffect(() => {
    (async () => {
      notification.warning({ message: 'Auth Initializing' });
      await AuthService.init();
      notification.warning({ message: 'Auth Initialized' });

      await timeout(1500);

      try {
        await AuthService.changeChain();
        await timeout(300);
        await signMessage();
      } catch (error: any) {
        if (
          error.message.includes(
            'The requested fn sendRequest is not available in this context'
          )
        ) {
          notification.error({
            message:
              'Current login flow is supported in chromium based browser only',
          });
          return;
        }

        console.log('abc', error.message, typeof error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default ArcanaAuthWrapper;
