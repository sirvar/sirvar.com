import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { H4 } from '@/components/Typography';
import { ThemeName } from '@/styles/theme';

import ArrowRight from './ArrowRight';

const Arrow = styled(ArrowRight)`
  opacity: 0;
  transition: all 0.25s ease-in-out;
  width: 20px;
  height: 20px;
  transform: translateX(-4px);
`;

const Text = styled(H4)<{ color: string }>`
  color: ${({ color }) => color};
  margin-left: 0.5rem;
  transform: translateX(4px);
  transition: all 0.25s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  max-width: 128px;
  max-height: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: ${({ theme }) => theme.name === ThemeName.Dark && `8px`};

  &:hover {
    ${Arrow} {
      opacity: 1;
      transform: translateX(4px);
    }
    ${Text} {
      transform: translateX(0px);
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

type IconLinkProps = {
  color: string;
  href: string;
  children: React.ReactNode;
  target?: string;
  icon?: string;
  className?: string;
};

const IconLink = ({
  href,
  color,
  children,
  target = `_blank`,
  icon,
  className,
}: IconLinkProps) => (
  <Link href={href} passHref>
    <Anchor target={target} className={className}>
      <Wrapper>
        {icon && (
          <Image
            src={icon}
            width={18}
            height={18}
            alt={`${children?.toString()} icon`}
          />
        )}
        <Text color={color}>{children}</Text>
        <Arrow color={color} />
      </Wrapper>
    </Anchor>
  </Link>
);

export default IconLink;
