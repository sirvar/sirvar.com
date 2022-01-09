import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { H3, H5 } from '@/components/Typography';

import NoSsr from '../NoSsr';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 144px;
  width: 100%;
  height: 96px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  margin: 16px 0;
  flex: 1 0 20%;
  margin-right: 16px;
  border: 1px solid ${({ theme }) => theme.secondary}55;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    path,
    circle {
      stroke: ${({ theme }) => theme.primary}DD;
    }
  }
`;

const Title = styled(H5)`
  color: ${({ theme }) => theme.primary}DD;
`;

const Value = styled(H3)<{ textLength: number }>`
  font-size: min(
    ${({ textLength }) => 8 / Math.min(6, textLength / 2)}rem,
    3.5rem
  );
  line-height: min(
    ${({ textLength }) => 8 / Math.min(6, textLength / 2)}rem,
    2.75rem
  );
  margin: 0;
`;

type CardProps = {
  title: string;
  value: string | number;
  Icon?: React.ComponentType;
  href?: string;
  tooltip?: string;
};

const Card: React.FC<CardProps> = ({ title, value, Icon, href, tooltip }) => (
  <Wrapper data-tip={tooltip} data-for={title}>
    <Header>
      <Title>{title}</Title>
      {Icon && <Icon />}
    </Header>
    <Value textLength={value.toString().length}>{value}</Value>
    <NoSsr>
      <ReactTooltip id={title} effect="solid" />
    </NoSsr>
  </Wrapper>
);

export default Card;
