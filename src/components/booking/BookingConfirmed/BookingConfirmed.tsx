import { FC } from 'react';
import s from './BookingConfirmed.module.scss';

import { CheckCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const BookingConfirmed: FC = () => {
  return (
    <div className={`${s.container} card-default`}>
      <CheckCircleOutlined className={s.checkMark} />
      <h1 className="heading h3">Booking Confirmed!</h1>
      <div className={`separator-line ${s.separator}`} />
      <div className={s.list}>
        <div className={s.item}>
          <span className={s.label}>Event</span>
          <span className={s.value}>Near Protocol Mumbai Meetup</span>
        </div>
        <div className={s.item}>
          <span className={s.label}>Venue</span>
          <span className={s.value}>Raymond Ground, Thane</span>
        </div>
        <div className={s.item}>
          <span className={s.label}>Date</span>
          <span className={s.value}>Oct 31st, 2022 (Monday) 4PM UTC</span>
        </div>
        <div className={s.item}>
          <span className={s.label}>Amount Paid</span>
          <span className={s.value}>Rs.21,100</span>
        </div>
      </div>
      <Link href="/" className={`ant-btn ant-btn-primary ${s.action}`}>
        Dashboard
      </Link>
    </div>
  );
};

export default BookingConfirmed;
