import React from 'react';
import { Link } from 'react-router';
import { Container } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Header from '../components/Header';

const Template = ({ location, children }) => (
  <Container
    style={{
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
    }}
  >
    <Header />
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={prefixLink('/')}
      >
        {config.blogTitle}
      </Link>
    </h3>
    {children}
  </Container>
);

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
