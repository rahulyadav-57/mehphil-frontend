import { EventCard } from '@/components/event';
import { Skeleton } from '@/components/ui';
import { useEventActions } from '@/hooks';
import { authState } from '@/stores';
import { EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { MeetupEvent } from 'types';
import s from './MyEvents.module.scss';

const MyEvents: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const auth = useRecoilValue(authState);

  const eventActions = useEventActions();

  const getEvents = async () => {
    setIsLoading(true);
    try {
      const eventList = (await eventActions.list({ createdBy: auth?._id })).data
        .data;
      console.log(eventList, 'eventList');
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
    <div>
      <div className={s.container}>
        <h1 className={`${s.heading} heading h3 w-700`}>Events</h1>
        <Skeleton isLoading={isLoading} cardsPerRow={3} />
        <div className={s.list}>
          {!isLoading &&
            events.map((item: any) => (
              <EventCard key={item._id} data={item}>
                <Link
                  href={`/dashboard/booking/${item._id}`}
                  className={`${s.bookings} w-600 ant-btn ant-btn-primary`}
                >
                  <EyeOutlined className="mr-5" /> View Bookings
                </Link>
              </EventCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
