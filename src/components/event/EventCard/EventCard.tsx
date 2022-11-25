import { AppConfig } from '@/config';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { MeetupEvent } from 'types';
import s from './EventCard.module.scss';

interface Props {
  data: MeetupEvent;
  className?: string;
  children?: ReactNode;
}

const EventCard: FC<Props> = ({ data, className, children }) => {
  return (
    <Link className={`${s.container} ${className}`} href={`/event/${data._id}`}>
      <span className={`${s.eventDate} text-xs`}>
        {moment(data.eventAt).format('Do MMM')}
      </span>

      <div className={s.thumbnailWrapper}>
        {data.thumbnail && (
          <Image
            src={
              !data.thumbnail
                ? '/images/layout/event-default.jpg'
                : `${AppConfig.API_URL}/${(data.thumbnail as any).path}`
            }
            width={500}
            height={240}
            alt=""
            className={s.thumbnail}
          />
        )}
        {children}
      </div>

      {!data.thumbnail && <div className={s.thumbnailFallback} />}

      <div className={s.info}>
        <span className={`w-500`}>{data.title}</span>
      </div>
    </Link>
  );
};

export default EventCard;
