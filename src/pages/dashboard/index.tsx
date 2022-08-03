import { GetStaticProps } from 'next';
import React from 'react';

import ArrowLink from '@/components/ArrowLink';
import { GitHubChart } from '@/components/GitHubChart';
import GitHubRow from '@/components/GitHubRow';
import Page from '@/components/Page';
import Section from '@/components/Section';
import TravelRow from '@/components/TravelRow';
import { H2 } from '@/components/Typography';
import UnsplashRow from '@/components/UnsplashRow';
import { getRepos, getUser } from '@/services/github';
import { getLocation, getTravel } from '@/services/travel';
import { getProfile, getStatistics } from '@/services/unsplash';

interface DashboardProps extends PageProps {
  githubData: GitHubData;
  travelData: TravelData;
  unsplashData: UnsplashData;
}

export default function Dashboard({
  githubData,
  locationData,
  travelData,
  unsplashData,
}: DashboardProps) {
  return (
    <Page
      title="Dashboard"
      description="A centralized dashboard with different metrics and charts"
      location={locationData.location}
    >
      <Section>
        <ArrowLink href="/dashboard/travel" target="">
          <H2>Travel</H2>
        </ArrowLink>
        <TravelRow locationData={locationData} travelData={travelData} />
      </Section>
      <Section>
        <ArrowLink href="https://unsplash.com/@sirvar">
          <H2>Unsplash</H2>
        </ArrowLink>
        <UnsplashRow unsplashData={unsplashData} />
      </Section>
      <Section>
        <ArrowLink href="https://github.com/sirvar">
          <H2>GitHub</H2>
        </ArrowLink>
        <GitHubRow githubData={githubData} />
        <GitHubChart />
      </Section>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationData = await getLocation();
  const travelData = await getTravel();
  const statistics = await getStatistics();
  const profile = await getProfile();
  const githubUser = await getUser();
  const githubRepos = await getRepos();

  return {
    props: {
      githubData: {
        user: githubUser,
        repos: githubRepos,
      },
      locationData,
      travelData,
      unsplashData: {
        ...statistics,
        total_photos: profile.total_photos,
      },
    },
    revalidate: 300,
  };
};
