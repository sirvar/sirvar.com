import Head from 'next/head';

import Layout from '@/components/Layout';

type PageProps = {
  title: string;
  description: string;
  children: React.ReactNode | React.ReactNode[];
};

const Page: React.FC<PageProps> = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Layout>{children}</Layout>
  </>
);

export default Page;
