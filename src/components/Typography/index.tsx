import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'GTWalsheimPro';
  font-size: 3em;
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H2 = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H3 = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H4 = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: 1em;
  line-height: 1em;
`;

export const H5 = styled.h5`
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const P = styled.p`
  margin: 0;
  font-family: 'Soehne';
  color: ${({ theme }) => theme.textPrimary};
`;
