import BookingListing from '@/components/booking/BookingListing';
import { DashbaordLayout } from '@/components/common';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function UserBookingPage() {
  return (
    <>
      <Head>
        <title>Bookings | {AppConstant.appDetails.appName}</title>
      </Head>
      <DashbaordLayout>
        <BookingListing isUserBooking={true} />
      </DashbaordLayout>
    </>
  );
}
