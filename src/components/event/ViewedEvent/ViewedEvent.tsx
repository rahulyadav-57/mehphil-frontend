import { FC } from 'react';
import EventCard from '../EventCard';
import s from './ViewedEvent.module.scss';

interface Props {
  className?: string;
}

const ViewedEvent: FC<Props> = ({ className }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <h1 className={`${s.heading} heading h3 w-700`}>Recently Viewed</h1>
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

export default ViewedEvent;
