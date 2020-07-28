import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {LogoJsonLd} from 'next-seo'
import HorizontalHeader from './HorizontalHeader'
import Footer from './Footer'
import Cookies from './sections/Cookies'

function Layout (props) {
  const {slug, config, children, headerInvert} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {
    title,
    mainNavigation,
    footerNavigation,
    footerText,
    logo,
    url,
    socialmedialogos
  } = config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover, user-scalable=no' />
      </Head>
      <div className='container'>
        <HorizontalHeader title={title} navItems={mainNavigation} logo={logo} headerInvert={headerInvert} />
        <div className='content'>{children}</div>
        {slug !== '/' ? <Footer navItems={footerNavigation} socialLogos={socialmedialogos} text={footerText} /> : null}
        <Cookies />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    url: PropTypes.string
  })
}

export default Layout
