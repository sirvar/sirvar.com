import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { H4, P } from '@/components/Typography';

const Wrapper = styled.div``;

const ListItem = styled.div`
  margin-top: 16px;
`;

const ListItemHeading = styled(H4)`
  font-weight: 400;
  text-decoration: underline;
`;

const ListItemText = styled(P)`
  color: ${({ theme }) => theme.primary}CC;
  margin-top: 0.25em;
`;

type ListItemProps = {
  title: string;
  description?: string;
  href?: string;
};

type ListProps = {
  items: ListItemProps[];
};

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ title, description, href }) => (
        <ListItem key={title}>
          {href ? (
            <Link href={href} passHref>
              <ListItemHeading as="a" href={href} target="_blank">
                {title}
              </ListItemHeading>
            </Link>
          ) : (
            <ListItemHeading>{title}</ListItemHeading>
          )}
          {description && <ListItemText>{description}</ListItemText>}
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default List;
