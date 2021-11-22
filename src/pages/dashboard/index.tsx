import axios from 'axios';
import { GetStaticProps } from 'next';

import Card from '@/components/Card';
import { GitHubChart } from '@/components/GitHubChart';
import Page from '@/components/Page';
import Row from '@/components/Row';
import { H2 } from '@/components/Typography';
import { getLocation } from '@/services/location';
import { getProfile, getStatistics } from '@/services/unsplash';

type DashboardProps = {
  locationData: LocationData;
  unsplash: UnsplashData;
};

const numberFormat = new Intl.NumberFormat(`en-US`);

export default function Dashboard({ locationData, unsplash }: DashboardProps) {
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
      <H2>Unsplash</H2>
      <Row>
        <Card
          title="Total Views"
          value={numberFormat.format(unsplash.views.total)}
        />
        <Card
          title="Total Downloads"
          value={numberFormat.format(unsplash.downloads.total)}
        />
        <Card
          title="Total Photos"
          value={numberFormat.format(unsplash.total_photos)}
        />
      </Row>
      <H2>GitHub</H2>
      <GitHubChart />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationData = getLocation();
  const statistics = await getStatistics();
  const profile = await getProfile();

  return {
    props: {
      locationData,
      unsplash: {
        ...statistics,
        total_photos: profile.total_photos,
      },
    },
    revalidate: 300,
  };
};
