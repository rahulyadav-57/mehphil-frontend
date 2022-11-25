import { AppLogo } from '@/components/ui';
import { authState } from '@/stores';
import Link from 'next/link';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import ConnectWallet from '../ConnectWallet';
import s from './Header.module.scss';

const Header: FC = () => {
  const auth = useRecoilValue(authState);

  return (
    <header className={s.container}>
      <div className="container">
        <div className={s.content}>
          <AppLogo />
          <div>
            <Link
              href="/event/create"
              className="ant-btn ant-btn-medium ant-btn-bordered ant-btn-primary"
            >
              + Add Event
            </Link>
            {auth?.accessToken && (
              <Link
                href="/dashboard/events"
                className={`ant-btn ant-btn-medium ant-btn-primary  ${s.dashboard}`}
              >
                Dashboard
              </Link>
            )}
            <ConnectWallet className={s.connectWallet} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
