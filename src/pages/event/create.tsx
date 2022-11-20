import { Layout } from '@/components/common';
import { EventCreate } from '@/components/event';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function EventDetailsPage() {
  return (
    <>
      <Head>
        <title>Create Event | {AppConstant.appDetails.appName}</title>
      </Head>
      <Layout>
        <div className="container">
          <EventCreate />
        </div>
      </Layout>
    </>
  );
}
