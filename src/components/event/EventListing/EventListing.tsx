import { Skeleton } from '@/components/ui';
import { useEventActions } from '@/hooks';
import { FC, useEffect, useState } from 'react';
import EventCard from '../EventCard';
import s from './EventListing.module.scss';

const EventListing: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<any>([]);

  const eventActions = useEventActions();

  const getEvents = async () => {
    setIsLoading(true);
    try {
      const eventList = (await eventActions.list()).data.data;
      setEvents(eventList);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className={s.container}>
      <h1 className={`${s.heading} heading h3 w-700`}>Upcoming Events</h1>
      <Skeleton isLoading={isLoading} cardsPerRow={3} />
      <div className={s.list}>
        {!isLoading &&
          events.map((item: any) => <EventCard key={item._id} data={item} />)}
      </div>
    </div>
  );
};

export default EventListing;
