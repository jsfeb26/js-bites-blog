import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default () => (
  <nav className="hideMobile" style={{ marginBottom: 0 }}>
    <ul style={{ textAlign: 'right', marginBottom: 0 }}>
      <li style={{ display: 'inline-block', margin: '10px', padding: '0' }}>
        <Link
          style={{ boxShadow: 'none', textDecoration: 'none'}}
          to={prefixLink('/about/')}
        >
          About
        </Link>
      </li>
      <li style={{ display: 'inline-block', margin: '10px', padding: '0' }}>
        <Link
          style={{ boxShadow: 'none', textDecoration: 'none' }}
          to={prefixLink('/resume/')}
        >
          Resume
        </Link>
      </li>
    </ul>
  </nav>
);
