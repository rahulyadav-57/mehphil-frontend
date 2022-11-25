import { DashbaordLayout } from '@/components/common';
import MyEvents from '@/components/dashboard/MyEvents';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function CreatedEventsPage() {
  return (
    <>
      <Head>
        <title>Bookings | {AppConstant.appDetails.appName}</title>
      </Head>
      <DashbaordLayout>
        <MyEvents />
      </DashbaordLayout>
    </>
  );
}
