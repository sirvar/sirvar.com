import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

type PageProps = {
  title: string;
  description: string;
  location: string;
  children: React.ReactNode | React.ReactNode[];
};

const Page: React.FC<PageProps> = ({
  title,
  description,
  location,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
      />
    </Head>
    <Layout>
      <Header />
      {children}
      <Footer location={location} />
    </Layout>
  </>
);

export default Page;
