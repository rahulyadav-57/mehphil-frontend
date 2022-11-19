import { Layout } from '@/components/common';
import { EventDetails } from '@/components/event';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function EventDetailsPage() {
  return (
    <>
      <Head>
        <title>Event Details | {AppConstant.appDetails.appName}</title>
      </Head>
      <Layout>
        <div className="container">
          <EventDetails />
        </div>
      </Layout>
    </>
  );
}
