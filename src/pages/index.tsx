import Page from '@/components/Page';
import Projects from '@/components/Projects';
import Section from '@/components/Section';
import SocialRow from '@/components/SocialRow';
import { H3, P } from '@/components/Typography';
import { getLocation } from '@/services/location';

export default function Home({ locationData }: PageProps) {
  return (
    <Page
      title="Rikin Katyal"
      description="Front-end software developer from Canada"
      location={locationData.location}
    >
      <Section>
        <P>
          I&apos;m currently working as a Software Developer at Cover, leading
          frontend projects using React &amp; Next.js. In my free time I like to
          travel, read, and play video games.
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
    revalidate: 21600,
    props: {
      locationData: await getLocation(),
    },
  };
}
