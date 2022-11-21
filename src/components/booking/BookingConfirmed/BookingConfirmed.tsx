import { FC, useEffect } from 'react';
import s from './BookingConfirmed.module.scss';

import { bookingState } from '@/stores';
import { CheckCircleOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import Router from 'next/router';
import { useRecoilState } from 'recoil';

const BookingConfirmed: FC = () => {
  const [booking, setBookingState] = useRecoilState(bookingState);

  useEffect(() => {
    if (!booking?.bookingId) {
      notification.error({ message: 'Booking not found' });
      Router.push('/');
      return;
    }
  }, []);

  return (
    <div className={`${s.container} card-default`}>
      <CheckCircleOutlined className={s.checkMark} />
      <h1 className="heading h3">Booking Confirmed!</h1>
      <div className={`separator-line ${s.separator}`} />
      {booking && (
        <div className={s.list}>
          <div className={s.item}>
            <span className={s.label}>Event</span>
            <span className={s.value}>{booking?.title}</span>
          </div>
          <div className={s.item}>
            <span className={s.label}>Venue</span>
            <span className={s.value}>Raymond Ground, Thane</span>
          </div>
          <div className={s.item}>
            <span className={s.label}>Date</span>
            <span className={s.value}>
              {moment(booking?.eventAt!!).format('MMM Do, YYYY (dddd)')},{' '}
              {moment(booking?.eventAt!!).format('LT')}
            </span>
          </div>
          {/* <div className={s.item}>
            <span className={s.label}>Amount Paid</span>
            <span className={s.value}>Rs.21,100</span>
          </div> */}
        </div>
      )}

      <Link href="/" className={`ant-btn ant-btn-primary ${s.action}`}>
        Home
      </Link>
    </div>
  );
};

export default BookingConfirmed;
