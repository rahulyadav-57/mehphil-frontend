import Link from 'next/link';
import { FC, ReactNode } from 'react';
import Layout from '../Layout';
import s from './DashbaordLayout.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const DashbaordLayout: FC<Props> = ({ children, className }) => {
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
