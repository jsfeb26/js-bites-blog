import React from 'react';
import { rhythm } from 'utils/typography';

import Logo from './Logo';
import Nav from './Nav';
import Hamburger from './Hamburger';

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
    <Logo />
    <Nav />
    <Hamburger />
  </div>
);
