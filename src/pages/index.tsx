import styled from 'styled-components';

import List from '@/components/List';
import Page from '@/components/Page';
import Projects from '@/components/Projects';
import Section from '@/components/Section';
import SocialRow from '@/components/SocialRow';
import { H3, P } from '@/components/Typography';
import { getLocation } from '@/services/location';

const Paragraph = styled(P)`
  max-width: 640px;
`;

const work = [
  {
    title: `Blog post 1`,
    href: `https://sirvar.com`,
  },
  {
    title: `Blog post 2`,
    href: `https://sirvar.com`,
  },
];

export default function Home({ locationData }: PageProps) {
  return (
    <Page
      title="Rikin Katyal"
      description="Portfolio"
      location={locationData.location}
    >
      <Section>
        <Paragraph>
          I&apos;m currently working as a Software Developer at Cover, leading
          frontend projects using React &amp; Next.js. In my free time I like to
          travel, read, and play video games.
        </Paragraph>
        <br />
        <Paragraph>Feel free to connect with me below.</Paragraph>
      </Section>
      <Section>
        <H3>Social</H3>
        <SocialRow />
      </Section>
      <Section>
        <H3>Projects</H3>
        <Projects />
      </Section>
      <Section>
        <H3>Recent Posts</H3>
        <List items={work} />
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 21600,
    props: {
      locationData: getLocation(),
    },
  };
}
