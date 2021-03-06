import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #1b1c1e;
  padding: 2em;
  margin: 1em 0;
  border-radius: 0.25em;
  transition: all 0.3s cubic-bezier(0.75, 0, 0.25, 1);
  &:hover {
    transform: scale(1.075);
  }
`;

Card.Title = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0.25em 0;
  font-family: "Space Mono", "monospace";
`;

Card.Tag = styled.h6`
  margin: 0;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.05rem;
  /* font-family: "Manrope"; */
  font-family: "Space Mono", "monospace";
`;

Card.SubTitle = styled.h4`
  color: #9c9da1;
  font-size: 0.9rem;
  margin: 0;
  font-family: "Space Mono", "monospace";
`;
Card.Description = styled.p``;

export default Card;
