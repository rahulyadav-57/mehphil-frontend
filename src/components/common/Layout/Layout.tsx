import { FC, ReactNode } from 'react';
import Footer from '../Footer';
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
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
