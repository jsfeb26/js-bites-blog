import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Menu from 'react-burger-menu/lib/menus/stack'

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '65px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0px',
    left: '0px'
  },
  bmMenuWrap: {
    top: '0px'
  }
};

export default class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }
  render() {
    return (
      <div className="showMobile">
        <Menu
          right
          isOpen={this.state.isOpen}
          burgerButtonClassName={ "showMobile" }
          menuClassName={ "showMobile" }
          overlayClassName={ "showMobile" }
          styles={styles}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              paddingBottom: '18px'
            }}
            onClick={() => this.setState(() => ({ isOpen: false }))}
            to={prefixLink('/about/')}
          >
            About
          </Link>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none'
            }}
            onClick={() => this.setState(() => ({ isOpen: false }))}
            to={prefixLink('/resume/')}
          >
            Resume
          </Link>
        </Menu>
      </div>
    );
  }
};
