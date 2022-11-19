import { AppLogo } from '@/components/ui';
import { FC } from 'react';
import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.container}>
      <AppLogo />
      <span className={s.copyright}>
        © {new Date().getFullYear()}. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
