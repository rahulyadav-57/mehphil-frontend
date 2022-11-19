import { FC } from 'react';
import s from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={`${s.container} section-loader`}>
      <div className={s.animationWrapper}>
        <div className={s.dash} />
        <div className={s.dash} />
        <div className={s.dash} />
        <div className={s.dash} />
      </div>
      <span className={s.label}>Initializing App...</span>
    </div>
  );
};

export default Loader;
