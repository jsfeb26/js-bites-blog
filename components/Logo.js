import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import logo from '../images/jsbites-logo.png';

export default () => (
  <Link
    style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }}
    to={prefixLink('/')}
  >
    <img src={logo} style={{ width: '215px', marginBottom: 0 }} />
  </Link>
);
