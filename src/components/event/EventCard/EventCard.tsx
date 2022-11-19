import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import s from './EventCard.module.scss';

interface Props {}

const EventCard: FC = () => {
  return (
    <Link className={s.container} href="/event-details">
      <span className={`${s.eventDate} text-xs`}>31st Oct</span>
      <Image
        src="/images/layout/event-default.jpg"
        width={500}
        height={240}
        alt=""
        className={s.thumbnail}
      />
      <div className={s.info}>
        <span className={`w-500`}>Near Protocol Mumbai Meetup</span>
      </div>
    </Link>
  );
};

export default EventCard;
