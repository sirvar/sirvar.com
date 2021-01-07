import React from "react";
import Card from "./common/card";

const Work = ({ company, position, date }) => (
  <Card>
    <Card.Tag>{date}</Card.Tag>
    <Card.Title>{company}</Card.Title>
    <Card.SubTitle>{position}</Card.SubTitle>
  </Card>
);

export default Work;
