import React from 'react';
import { Link } from 'react-router';
import get from 'lodash.get';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import Helmet from "react-helmet";
import { config } from 'config';
import include from 'underscore.string/include';
import Bio from 'components/Bio';

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
      <h2>Latest Posts</h2>
      <ul style={{ listStyleType: 'none' }}>
        {visiblePages.map((page) => (
            <li
              key={page.path}
              style={{
                  marginBottom: rhythm(1/4),
              }}
            >
              <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                  {get(page, 'data.title', page.path)}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;
