import { useUserActions } from '@/hooks/User.hooks';
import { AuthService } from '@/services';
import { authState } from '@/stores';
import {
  ADAPTER_EVENTS,
  SafeEventEmitterProvider,
  WALLET_ADAPTERS,
} from '@web3auth/base';
import { Web3AuthCore } from '@web3auth/core';
import { ethers } from 'ethers';
import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import s from './ConnectWallet.module.scss';

interface Props {
  className?: string;
}

let isSigning = false;

const ConnectWallet: FC<Props> = ({ className = '' }) => {
  const [auth, setAuth] = useRecoilState(authState);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [address, setAddress] = useState('');

  const userActions = useUserActions();

  async function signMessage(_address: string) {
    if (isSigning) {
      return;
    }
    isSigning = true;
    const nonce = await (await userActions.nonce()).data;
    const user = await AuthService.getUser();
    const message = `Sign in message to verify: ${nonce}`;
    const signature = (await AuthService.personalSign(
      message,
      _address
    )) as string;
    try {
      const accessToken = await (
        await userActions.login({
          message,
          signature,
          address: _address,
        })
      ).data.data.token;
      if (!user) {
        return;
      }
      setAuth({
        id: user._id,
        address: _address,
        name: (user.name as string) || 'User',
        email: user.email!!,
        avatar: user?.picture,
        accessToken,
      });
    } catch (error) {}
  }

  const connect = async () => {
    const authInstance: Web3AuthCore = AuthService.getAuth()!!;
    if (!authInstance) {
      console.log('web3auth not initialized yet');
      return;
    }

    try {
      const web3authProvider = await authInstance.connectTo(
        WALLET_ADAPTERS.TORUS_EVM
      );
      setProvider(web3authProvider);
    } catch (error: any) {
      if (error.message.includes('walletAlready connected')) {
        signMessage((await AuthService.getAccounts())[0]);
      }
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setAuth({
        email: '',
        accessToken: '',
        name: '',
        address: '',
        avatar: '',
      });
    } catch (error) {
      console.log('error-logout', error);
    } finally {
    }
  };

  useEffect(() => {
    const subscribeAuthEvents = (web3auth: Web3AuthCore) => {
      web3auth.on(ADAPTER_EVENTS.CONNECTED, async (_data: unknown) => {
        const web3 = new ethers.providers.Web3Provider(web3auth.provider!!);
        const accounts = await web3.listAccounts();
        setAddress(accounts[0]);
        signMessage(accounts[0]);
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log('connecting');
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        setAuth({
          email: '',
          accessToken: '',
          name: '',
          address: '',
          avatar: '',
        });
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) => {
        console.error('some error or user has cancelled login request', error);
      });
    };
    (async () => {
      const authInstance = await AuthService.init();
      if (!authInstance) {
        return;
      }
      subscribeAuthEvents(authInstance);
    })();
  }, []);

  return (
    <>
      {!auth?.accessToken && (
        <div
          className={`ant-btn ant-btn-medium ant-btn-primary ${s.container} ${className}`}
          onClick={connect}
        >
          Sign In
        </div>
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
