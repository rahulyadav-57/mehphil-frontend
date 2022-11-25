import { useEventActions } from '@/hooks';
import { authState } from '@/stores';
import { Table } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import s from './BookingListing.module.scss';

interface Props {
  isUserBooking?: boolean;
}

const BookingListing: FC<Props> = ({ isUserBooking = false }) => {
  const [auth, setAuth] = useRecoilState(authState);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const eventActions = useEventActions();
  const [bookings, setBookings] = useState<any | []>([]);

  const { id: eventId } = router.query;

  const getBookings = async () => {
    try {
      setIsLoading(true);
      const filter: any = {};
      if (isUserBooking) {
        filter['createdBy'] = auth?.id;
      } else {
        filter['eventId'] = eventId?.toString()!!;
      }
      const response = await eventActions.bookings(filter);

      setBookings(response.data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tickets',
      dataIndex: 'ticketCount',
      key: 'ticketCount',
    },
    {
      title: 'IS NFT',
      dataIndex: 'nftOpted',
      key: 'nftOpted',
      render: (nft: boolean) => <span>{nft ? 'Yes' : 'No'}</span>,
    },
    {
      title: 'Members',
      dataIndex: 'members',
      key: 'members',
      render: (members: any) => <span>{members.join(', ')}</span>,
    },
    {
      title: 'Event Date',
      dataIndex: 'eventId',
      key: 'eventId',
      render: (eventId: any) => (
        <span>
          {moment(eventId.eventAt).format('YYYY-MM-DD')}{' '}
          {moment(eventId.eventAt).format('LT')}
        </span>
      ),
    },
  ];

  useEffect(() => {
    getBookings();
  }, [eventId]);

  return (
    <div className={s.container}>
      {bookings.length > 0 && !isUserBooking && (
        <span className="heading h4 w-700">
          Bookings for: {bookings[0].eventId.title}
        </span>
      )}
      {isUserBooking && <span className="heading h4 w-700">My Bookings</span>}

      <Table
        className="full-width mt-20"
        dataSource={bookings}
        columns={columns}
      />
    </div>
  );
};

export default BookingListing;
