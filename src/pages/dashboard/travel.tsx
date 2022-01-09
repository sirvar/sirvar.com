import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Map from '@/components/Map';
import NoSsr from '@/components/NoSsr';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { H2 } from '@/components/Typography';

export default function Travel() {
  const [content, setContent] = useState(``);
  return (
    <Page
      title="Dashboard"
      description="A centralized dashboard with different metrics and charts"
      location="Test"
    >
      <Section>
        <H2>Travel</H2>
        <Map setTooltipContent={setContent} />
        <NoSsr>
          <ReactTooltip>{content}</ReactTooltip>
        </NoSsr>
      </Section>
    </Page>
  );
}
