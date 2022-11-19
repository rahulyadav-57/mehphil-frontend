import { FC, ReactNode } from 'react';
import Header from '../Header';
import s from './Layout.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${s.container} ${className} height-min-100`}>
      <Header />

      <div className={`${s.column} ${s.column_right}`}>{children}</div>
    </div>
  );
};

export default Layout;
