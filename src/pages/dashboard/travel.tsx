import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Map from '@/components/Map';
import NoSsr from '@/components/NoSsr';
import Page from '@/components/Page';
import Section from '@/components/Section';
import TravelRow from '@/components/TravelRow';
import { H2, P } from '@/components/Typography';
import { getLocation } from '@/services/location';
import { getTravel } from '@/services/travel';

interface TravelProps extends PageProps {
  travelData: TravelData;
}

export default function Travel({ locationData, travelData }: TravelProps) {
  const [content, setContent] = useState(``);

  return (
    <Page
      title="Dashboard"
      description="A centralized dashboard with different metrics and charts"
      location={locationData.location}
    >
      <Section>
        <H2>Travel</H2>
        <P>
          As an avid traveller, I like to document my adventures. This map is
          one part of that, and showcases all the countries I&apos;ve been able
          to mark off my list. I&apos;ve set a goal for myself to travel to{` `}
          <b>100</b> countries in my life. This is the page to keep track and
          follow along.
        </P>
        <br />
        <Map
          dataFor="travel-map"
          setTooltipContent={setContent}
          countries={travelData.countries}
        />
        <TravelRow locationData={locationData} travelData={travelData} />
        <NoSsr>
          <ReactTooltip id="travel-map">{content}</ReactTooltip>
        </NoSsr>
      </Section>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locationData = getLocation();
  const travelData = getTravel();

  return {
    props: {
      locationData,
      travelData,
    },
    revalidate: 300,
  };
};
