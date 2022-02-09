import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import ArrowRight from '@/public/icons/arrow-right.svg';

const Arrow = styled(ArrowRight)`
  opacity: 0;
  transition: all 0.25s ease-in-out;
  width: 20px;
  height: 20px;
  transform: translateX(-4px);

  path {
    stroke: ${({ theme }) => theme.textPrimary};
  }
`;

const Content = styled.div`
  transform: translateX(4px);
  transition: all 0.25s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    ${Arrow} {
      opacity: 1;
      transform: translateX(4px);
    }
    ${Content} {
      transform: translateX(0px);
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  target?: string;
  className?: string;
};

const ArrowLink = ({
  href,
  children,
  target = `_blank`,
  className,
}: ArrowLinkProps) => {
  const childArray = React.Children.toArray(children);
  const multipleChildren = childArray.length > 1;

  return (
    <Link href={href} passHref>
      <Anchor target={target} className={className}>
        <Wrapper>
          {multipleChildren && childArray[0]}
          <Content>
            {multipleChildren ? childArray.slice(1) : childArray}
          </Content>
          <Arrow />
        </Wrapper>
      </Anchor>
    </Link>
  );
};

export default ArrowLink;
