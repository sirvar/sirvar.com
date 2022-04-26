import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { H4, H5 } from '@/components/Typography';
import Home from '@/public/icons/home.svg';
import Pin from '@/public/icons/map-pin.svg';

const Wrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavRow = styled(Row)`
  justify-content: flex-start;
`;

const NavItem = styled(H5)`
  margin-right: 1.5em;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: bold;
`;

const Heading = styled(H4)`
  font-weight: 400;
  margin-top: 2em;

  & > svg {
    margin-bottom: -2px !important;
  }

  path,
  circle {
    stroke: ${({ theme }) => theme.textPrimary};
  }
`;

const Location = styled(Heading)``;

const HomeLocation = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const footerLinks = [
  {
    title: `About`,
    href: `/`,
  },
  {
    title: `Dashboard`,
    href: `/dashboard`,
  },
  {
    title: `Resume`,
    href: `/resume.pdf`,
    target: `_blank`,
  },
  {
    title: `Blog`,
    href: `https://sirvar.substack.com`,
  },
];

type FooterProps = {
  location: string;
};

const Footer: React.FC<FooterProps> = ({ location }) => {
  const homeLocation = `Windsor, ON, Canada`;

  return (
    <Wrapper>
      <NavRow>
        {footerLinks.map(({ title, href, target = `` }) => (
          <Link key={title} href={href} passHref>
            <NavItem as="a" target={target}>
              {title}
            </NavItem>
          </Link>
        ))}
      </NavRow>
      <Row>
        <Heading>
          &copy;
          {` `}
          {new Date().getFullYear()} Rikin Katyal
        </Heading>
        <Location>
          {homeLocation !== location && (
            <HomeLocation>
              <Home />
              {` `}
              {homeLocation} &mdash;
            </HomeLocation>
          )}
          {` `}
          <Pin />
          {` `}
          {location}
        </Location>
      </Row>
    </Wrapper>
  );
};

export default Footer;
