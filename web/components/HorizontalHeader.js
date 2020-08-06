import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import InlineSVG from 'react-inlinesvg'
import styles from './HorizontalHeader.module.css'
import HamburgerMenu from 'react-hamburger-menu'

class HorizontalHeader extends Component {
  state = {showNav: false};

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.array
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
      return <InlineSVG src={logo.asset.url} className={styles.logo} />
    }

    return <img draggable={false} onDragStart={() => false} src={logo.asset.url} alt={logo.title} className={styles.logo} />
  };

  render () {
    const {title = 'Missing title', navItems, router, logo, headerInvert} = this.props
    const {showNav} = this.state

    return (
      <div
        className={`${styles.root} ${headerInvert && styles.inverted}`}
        data-show-nav={showNav}
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
              <InlineSVG src='/static/images/dawn.svg' alt='Dawn Production' />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map((item) => {
                const {slug, title, _id} = item
                const isActive = router.asPath.substring(1) === slug.current
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link
                      href={{
                        pathname: '/[...slug]',
                        query: {slug: slug.current}
                      }}
                      as={`/${slug.current}`}
                    >
                      <a
                        data-is-active={isActive ? 'true' : 'false'}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
          <div
            onClick={this.handleMenuToggle}
            className={styles.showNavButton}
          >
            <HamburgerMenu
              isOpen={showNav}
              menuClicked={() => {}}
              width={30}
              height={25}
              strokeWidth={2}
              rotate={0}
              color={headerInvert ? 'black' : 'white'}
              borderRadius={1}
              animationDuration={0.25}
            />
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(HorizontalHeader)
