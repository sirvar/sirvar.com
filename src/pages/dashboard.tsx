import { GetStaticProps } from 'next';

import Card from '@/components/Card';
import { GitHubChart } from '@/components/GitHubChart';
import Page from '@/components/Page';
import Row from '@/components/Row';
import { H2 } from '@/components/Typography';
import { getLocation } from '@/services/location';

type DashboardProps = {
  locationData: LocationData;
};

export default function Dashboard({ locationData }: DashboardProps) {
  return (
    <Page
      title="Dashboard"
      description="A centralized dashboard with different metrics and charts"
    >
      <H2>Travel</H2>
      <Row>
        <Card title="Currently In" value={locationData.location} />
        <Card title="Countries Visited" value="12" />
        <Card title="Distance Travelled" value="176,302 km" />
      </Row>
      <H2>GitHub Stats</H2>
      <GitHubChart />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationData = getLocation();

  return {
    props: {
      locationData,
    },
    revalidate: 300,
  };
};
