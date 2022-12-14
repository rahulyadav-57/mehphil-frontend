import BookingListing from '@/components/booking/BookingListing';
import { DashbaordLayout } from '@/components/common';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function EVentBookingsPage() {
  return (
    <>
      <Head>
        <title>Bookings | {AppConstant.appDetails.appName}</title>
      </Head>
      <DashbaordLayout>
        <BookingListing />
      </DashbaordLayout>
    </>
  );
}
