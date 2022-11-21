import { AppLogo } from '@/components/ui';
import Link from 'next/link';
import { FC } from 'react';
import ConnectWallet from '../ConnectWallet';
import s from './Header.module.scss';

const Header: FC = () => {
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

            <ConnectWallet className={s.connectWallet} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
