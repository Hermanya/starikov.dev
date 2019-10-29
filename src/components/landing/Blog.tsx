import React from "react";
import styled from "styled-components/macro";
import preval from "preval.macro";
import { Title, Heading, Description } from "../typography";
import { Link } from "react-router-dom";
import Container from "../Container";
import { formatDate } from "../../util";

const Post = styled.div`
  display: grid;
  grid-template: "heading heading heading" "description description description" "read . created" / auto 1fr auto;
  grid-gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Created = styled.div`
  align-self: center;
  justify-self: flex-end;
  font-size: 0.85rem;
  color: var(--gray);
`;

const Read = styled(Link)`
  background: var(--gray5);
  text-transform: uppercase;
  padding: 2px 10px;
  border-radius: 30px;
`;

const BlogPostTitle = styled(Heading)`
  color: var(--text);
`;

const Blog = () => {
  return (
    <Container>
      <Title>Blog</Title>
      {(preval`module.exports = require('../blog/node.js').getPostMetaDatas()` as any[])
        .sort((a, b) => {
          // @ts-ignore
          return new Date(b.created) - new Date(a.created);
        })
        .map(post => (
          <Post>
            <Link to={post.path} css="grid-area: heading;">
              <BlogPostTitle>{post.title}</BlogPostTitle>
            </Link>
            <Description css="grid-area: description;">
              {post.description}
            </Description>
            <Created css="grid-area: created;">
              {formatDate(post.created)}
            </Created>
            <Read to={post.path} css="grid-area: read;">
              Read
            </Read>
          </Post>
        ))}
    </Container>
  );
};

export default Blog;
