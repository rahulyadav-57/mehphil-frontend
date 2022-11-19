import { AppLogo } from '@/components/ui';
import { FC, ReactNode } from 'react';
import s from './Layout.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const GuestLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${s.container} ${className} height-min-100`}>
      <div className={`${s.column} ${s.column_left}`}>
        <AppLogo type="vertical" />
      </div>

      <div className={`${s.column} ${s.column_right}`}>{children}</div>
    </div>
  );
};

export default GuestLayout;
