import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { H3, H5 } from '@/components/Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 192px;
  height: 96px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  margin: 16px 0;
  margin-right: 16px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
`;

const Value = styled(H3)<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  margin: 0;
`;

type CardProps = {
  title: string;
  value: string;
  href?: string;
  tooltip?: string;
};

const Card: React.FC<CardProps> = ({ title, value, href, tooltip }) => (
  <Wrapper data-tip={tooltip}>
    <H5>{title}</H5>
    <Value fontSize={1.5 + 2.5 / value.length}>{value}</Value>
    <ReactTooltip />
  </Wrapper>
);

export default Card;
