import { Checkout } from '@/components/booking';
import { Layout } from '@/components/common';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function EventDetailsPage() {
  return (
    <>
      <Head>
        <title>Checkout | {AppConstant.appDetails.appName}</title>
      </Head>
      <Layout>
        <div className="container">
          <Checkout />
        </div>
      </Layout>
    </>
  );
}
