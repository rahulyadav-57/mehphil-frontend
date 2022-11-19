import { AppLogo } from '@/components/ui';
import Link from 'next/link';
import { FC } from 'react';
import s from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={s.container}>
      <div className="container">
        <div className={s.content}>
          <AppLogo />
          <div>
            <Link
              href="/"
              className="ant-btn ant-btn-medium ant-btn-bordered ant-btn-primary"
            >
              + Add Event
            </Link>
            <div
              className={`ant-btn  ant-btn-medium ant-btn-primary ${s.connectWallet}`}
            >
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
