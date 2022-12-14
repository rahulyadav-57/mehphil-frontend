import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import s from './AppLogo.module.scss';

interface Props {
  type?: 'horiozontal' | 'vertical';
  src?: string;
  className?: string;
}

const AppLogo: FC<Props> = ({
  type = 'vertical',
  src = '/images/logo.png',
  className = '',
}) => {
  let imageSource = src;
  if (type === 'vertical') {
    imageSource = '/images/logo.png';
  }
  return (
    <Link href="/" className={`${s.container} ${className} ${s[type]}`}>
      <Image
        className={s.brandImage}
        src={imageSource}
        width={type === 'horiozontal' ? 166 : 50}
        height={50}
        alt=""
      />
    </Link>
  );
};

export default AppLogo;
