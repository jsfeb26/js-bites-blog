import React from 'react';
import { Link } from 'react-router';
import get from 'lodash.get';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import Helmet from "react-helmet";
import { config } from 'config';
import include from 'underscore.string/include';
import styled from 'styled-components';
import Bio from '../components/Bio';

const ListContainer = styled.ul`
  list-style-type: none;
  margin-left: 0 !important;
  li {
    margin-bottom: 0;
  }
  li + li {
    margin-top: 9px;
  }
`;

const PostLink = styled(Link)`
  box-shadow: none;
`;

const Title = styled.h2`
  margin-top: 36px;
  margin-bottom: 18px;
`;

const BlogIndex = (props) => {
  const sortedPages = props.route.pages.sort((a, b) => {
    const aDate = a.data.date;
    const bDate = b.data.date;

    if (aDate > bDate) {
      return -1;
    } else if (aDate < bDate) {
      return 1;
    }

    return 0;
  });

  // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
  const visiblePages = sortedPages.filter(page => (
    get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
  ));

  return (
    <div>
      <Helmet
        title={config.blogName}
        meta={[
          {"name": "description", "content": "A Bite Sized Javascript Blog"},
          {"name": "keywords", "content": "javascript, react, redux, relay, apollo, graphql, node, nextjs"},
        ]}
      />
      <Bio />
      <Title>Latest Posts</Title>
      <ListContainer>
        {visiblePages.map((page) => (
            <li key={page.path}>
              <PostLink to={prefixLink(page.path)}>
                  {get(page, 'data.title', page.path)}
              </PostLink>
            </li>
        ))}
      </ListContainer>
    </div>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;
