import React from 'react'
import Card from './common/card'

const Post = ({
  title,
  content,
  date
}) => (
  <Card>
    <Card.Tag>{ date }</Card.Tag>
    <Card.Title>{ title }</Card.Title>
    <Card.Description>{ truncate(content, 175) }</Card.Description>
  </Card>
)

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};

export default Post