import { Layout } from '@/components/common';
import { EventListing, ViewedEvent } from '@/components/event';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>{AppConstant.appDetails.appName}</title>
      </Head>
      <Layout>
        <div className="container">
          <EventListing />
          <ViewedEvent className="mt-100" />
        </div>
      </Layout>
    </>
  );
}
