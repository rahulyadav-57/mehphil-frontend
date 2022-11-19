import { FC } from 'react';
import EventCard from '../EventCard';
import s from './EventListing.module.scss';

const EventListing: FC = () => {
  return (
    <div className={s.container}>
      <h1 className={`${s.heading} heading h3 w-700`}>Upcoming Events</h1>
      <div className={s.list}>
        {Array(6)
          .fill('')
          .map((_item, i) => (
            <EventCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default EventListing;
