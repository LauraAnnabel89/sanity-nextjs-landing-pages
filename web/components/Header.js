import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import styles from './Header.module.css'
import HamburgerMenu from 'react-hamburger-menu'

import HamburgerIcon from './icons/Hamburger'

class Header extends Component {
  state = {showNav: false};

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string
      }),
      events: PropTypes.any
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.shape({
          current: PropTypes.string
        }).isRequired
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.string
    })
  };

  componentDidMount () {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount () {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  };

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav
    })
  };

  renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className={styles.logo} />
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
  };

  render () {
    const {title = 'Missing title', navItems, router, logo, reverseColour} = this.props
    const {showNav} = this.state

    return (
      <div
        className={styles.root}
        data-show-nav={showNav}
        style={{color: reverseColour && 'black'}}
      >
        <div className={styles.branding}>
          <Link
            href={{
              pathname: '/',
              query: {
                slug: '/'
              }
            }}
            as='/'
          >
            <a>
              <img src='static/images/dawn.svg' alt='Dawn Production' />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map((item) => {
                const {slug, title, _id} = item
                const isActive =
                  router.pathname === '/LandingPage' && router.query.slug === slug.current
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link
                      href={{
                        pathname: '/LandingPage',
                        query: {slug: slug.current}
                      }}
                      as={`/${slug.current}`}
                    >
                      <a
                        data-is-active={isActive ? 'true' : 'false'}
                        style={{borderBottom: reverseColour && 'none'}}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
          <div className={styles.showNavButton}>
            <HamburgerMenu
              isOpen={showNav}
              menuClicked={this.handleMenuToggle}
              width={20}
              height={15}
              strokeWidth={1}
              rotate={0}
              color={showNav ? 'black' : 'white'}
              borderRadius={1}
              animationDuration={0.25}
            />
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
