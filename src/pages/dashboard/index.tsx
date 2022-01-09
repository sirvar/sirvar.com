import { GetStaticProps } from 'next';

import Card from '@/components/Card';
import { GitHubChart } from '@/components/GitHubChart';
import Page from '@/components/Page';
import Row from '@/components/Row';
import Section from '@/components/Section';
import TravelRow from '@/components/TravelRow';
import { H2 } from '@/components/Typography';
import Camera from '@/public/icons/camera.svg';
import Download from '@/public/icons/download.svg';
import Eye from '@/public/icons/eye.svg';
import { getLocation } from '@/services/location';
import { getTravel } from '@/services/travel';
import { getProfile, getStatistics } from '@/services/unsplash';
import format from '@/utils/format';

interface DashboardProps extends PageProps {
  travelData: TravelData;
  unsplash: UnsplashData;
}

export default function Dashboard({
  locationData,
  travelData,
  unsplash,
}: DashboardProps) {
  return (
    <Page
      title="Dashboard"
      description="A centralized dashboard with different metrics and charts"
      location={locationData.location}
    >
      <Section>
        <H2>Travel</H2>
        <TravelRow locationData={locationData} travelData={travelData} />
      </Section>
      <Section>
        <H2>Unsplash</H2>
        <Row>
          <Card
            title="Total Views"
            value={format(unsplash.views.total)}
            Icon={Eye}
          />
          <Card
            title="Total Downloads"
            value={format(unsplash.downloads.total)}
            Icon={Download}
          />
          <Card
            title="Total Photos"
            value={format(unsplash.total_photos)}
            Icon={Camera}
          />
        </Row>
      </Section>
      <Section>
        <H2>GitHub</H2>
        <br />
        <GitHubChart />
      </Section>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationData = getLocation();
  const travelData = getTravel();
  const statistics = await getStatistics();
  const profile = await getProfile();

  return {
    props: {
      locationData,
      travelData,
      unsplash: {
        ...statistics,
        total_photos: profile.total_photos,
      },
    },
    revalidate: 300,
  };
};
