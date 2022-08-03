import Page from '@/components/Page';
import Projects from '@/components/Projects';
import Section from '@/components/Section';
import SocialRow from '@/components/SocialRow';
import { H3, P } from '@/components/Typography';
import { getLocation } from '@/services/travel';

export default function Home({ locationData }: PageProps) {
  return (
    <Page
      title="Rikin Katyal"
      description="Front-end software developer from Canada"
      location={locationData.location}
    >
      <Section>
        <P>
          I&apos;m currently working as a Senior Software Engineer at Utopia
          Labs, working on web3 projects with React &amp; Next.js. In my free
          time I like to travel, read, and play video games.
        </P>
        <br />
        <P>Feel free to connect with me below.</P>
      </Section>
      <Section>
        <H3>Social</H3>
        <SocialRow />
      </Section>
      <Section>
        <H3>Projects</H3>
        <Projects />
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 300,
    props: {
      locationData: await getLocation(),
    },
  };
}
