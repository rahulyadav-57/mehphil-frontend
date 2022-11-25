import { authState } from '@/stores';
import Link from 'next/link';
import Router from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Layout from '../Layout';
import s from './DashbaordLayout.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const DashbaordLayout: FC<Props> = ({ children, className }) => {
  const auth = useRecoilValue(authState);

  useEffect(() => {
    if (!auth?.accessToken) {
      Router.push('/');
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className={s.container}>
          <div className={s.sidebar}>
            <Link className={s.menuItem} href="/dashboard/events">
              Created Events
            </Link>
            <Link className={s.menuItem} href="/dashboard/booking">
              My Bookings
            </Link>
          </div>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default DashbaordLayout;
