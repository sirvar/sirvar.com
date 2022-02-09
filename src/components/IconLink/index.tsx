import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import _ArrowLink from '@/components/ArrowLink';
import { H4 } from '@/components/Typography';
import { ThemeName } from '@/styles/theme';

const Text = styled(H4)<{ color: string }>`
  color: ${({ color }) => color};
  margin-left: 0.5rem;
`;

const ArrowLink = styled(_ArrowLink)<{ color: string }>`
  & > div {
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
  }
  svg {
    path {
      stroke: ${({ color }) => color};
    }
  }
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
  <ArrowLink color={color} href={href} target={target} className={className}>
    {icon && (
      <Image
        src={icon}
        width={18}
        height={18}
        alt={`${children?.toString()} icon`}
      />
    )}
    <Text color={color}>{children}</Text>
  </ArrowLink>
);

export default IconLink;
