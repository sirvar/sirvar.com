import React from 'react';
import styled from 'styled-components';

import { H1, H4 } from '@/components/Typography';

const Wrapper = styled.div``;

const Name = styled(H1)`
  margin-left: -0.2rem;
`;

const Title = styled(H4)`
  color: ${({ theme }) => theme.primary}DD;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Name>Rikin Katyal</Name>
      <Title>Software Developer</Title>
    </Wrapper>
  );
};

export default Header;
