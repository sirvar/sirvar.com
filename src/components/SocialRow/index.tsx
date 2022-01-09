import React from 'react';
import styled from 'styled-components';

import _IconLink from '@/components/IconLink';
import { H1, H3, H4 } from '@/components/Typography';

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`;

const IconLink = styled(_IconLink)`
  margin-right: 1.5em;
`;

const SocialRow: React.FC = () => (
  <Row>
    <IconLink
      color="#1DA1F2"
      icon="/icons/twitter.svg"
      href="https://twitter.com/sirvar_"
    >
      Twitter
    </IconLink>
    <IconLink
      color="#333333"
      icon="/icons/github.svg"
      href="https://github.com/sirvar"
    >
      GitHub
    </IconLink>
    <IconLink
      color="#2867B2"
      icon="/icons/linkedin.svg"
      href="https://linkedin.com/in/sirvar"
    >
      LinkedIn
    </IconLink>
    <IconLink
      color="#104455"
      icon="/icons/at-sign.svg"
      href="mailto:rikin@sirvar.com"
    >
      Email
    </IconLink>
  </Row>
);

export default SocialRow;
