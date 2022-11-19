import { Layout } from '@/components/common';
import { AppConstant } from '@/constant';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>{AppConstant.appDetails.appName}</title>
      </Head>
      <Layout></Layout>
    </>
  );
}
