import { useUserActions } from '@/hooks/User.hooks';
import { AuthService } from '@/services';
import { authState } from '@/stores';
import { timeout } from '@/utils/Misc';
import { Tooltip } from 'antd';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import s from './ConnectWallet.module.scss';

interface Props {
  className?: string;
}

const ConnectWallet: FC<Props> = ({ className = '' }) => {
  const [auth, setAuth] = useRecoilState(authState);
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

  const connect = async () => {
    await AuthService.loginWithSocial('google');

    const authInstance = await AuthService.getAuth();
    await AuthService.changeChain();
    await timeout(300);
    await signMessage();
    // const nonce = await userActions.nonce();
    // console.log(nonce);
    // const signature = await AuthService.personalSign(user.address);

    // console.log(signature, 'signature');
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.log('error-logout', error);
    } finally {
      location.reload();
    }
  };

  return (
    <>
      {!auth?.accessToken && (
        <Tooltip title="Sign in with chromium based browser.">
          <div
            className={`ant-btn ant-btn-medium ant-btn-primary ${s.container} ${className}`}
            onClick={connect}
          >
            Sign In
          </div>
        </Tooltip>
      )}
      {auth?.accessToken && (
        <div
          className={`ant-btn ant-btn-medium ant-btn-primary ${s.container} ${className}`}
          onClick={logout}
        >
          Logout
        </div>
      )}
    </>
  );
};

export default ConnectWallet;
