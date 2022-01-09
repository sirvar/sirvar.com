import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 3em;
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: 1em;
  line-height: 1em;
`;

export const H5 = styled.h5`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  color: ${({ theme }) => theme.secondary};
`;

export const P = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0;
  max-width: 640px;
  color: ${({ theme }) => theme.textPrimary};
`;
