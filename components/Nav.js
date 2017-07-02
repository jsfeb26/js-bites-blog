import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import logo from '../images/jsbites-logo.png';

export default () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: rhythm(1.5),
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
      <img
        src={logo}
        style={{
          width: '215px',
          marginBottom: 0
        }}
      />
    </Link>
    <nav
      className="hideMobile"
      style={{
        marginBottom: 0
      }}
    >
      <ul
        style={{
          textAlign: 'right',
          marginBottom: 0
        }}
      >
        <li
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '0'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none'
            }}
            to={prefixLink('/about/')}
          >
            About
          </Link>
        </li>
        <li
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '0'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none'
            }}
            to={prefixLink('/resume/')}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
