import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styles from './Homelayout.module.css'

import {LogoJsonLd} from 'next-seo'
import Header from './Header'

function HomeLayout (props) {
  const {config, children} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {title, mainNavigation, footerNavigation, footerText, logo, url} = config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <div className={styles.homeContainer}>
        <Header title={title} navItems={mainNavigation} logo={logo} />
        <div className='content'>{children}</div>
      </div>
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    url: PropTypes.string
  })
}

export default HomeLayout
