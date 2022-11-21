import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import s from './EventCard.module.scss';

interface EventInteraface {
  title: string;
  eventAt: Date;
}
interface Props {
  data?: EventInteraface;
  className?: string;
}

const EventCard: FC<Props> = ({ data, className }) => {
  if (!data) {
    data = {
      title: 'Near Protocol Mumbai Meetup',
      eventAt: new Date(),
    };
  }
  return (
    <Link className={`${s.container} ${className}`} href="/event-details">
      <span className={`${s.eventDate} text-xs`}>
        {moment(data.eventAt).format('Do MMM')}
      </span>
      <Image
        src="/images/layout/event-default.jpg"
        width={500}
        height={240}
        alt=""
        className={s.thumbnail}
      />
      <div className={s.info}>
        <span className={`w-500`}>{data.title}</span>
      </div>
    </Link>
  );
};

export default EventCard;
