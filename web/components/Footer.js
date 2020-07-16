import React, {Component, useState} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import ImageSection from './sections/ImageSection'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

function Footer (props) {

  const [showScroll, setShowScroll] = useState(false)
  const isServer = typeof window === 'undefined'

  if (!isServer) {
    const checkScrollTop = () => {
      if (window.pageYOffset <= window.innerHeight) {
        setShowScroll(false)
        return
      }

      const threshold = document.body.scrollHeight - window.innerHeight - 10

      if (!showScroll && window.pageYOffset > threshold) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= threshold) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
  }

  const {navItems, text, router, image, alt, caption, asset, sociallogos} = props
  return (
    <div className={styles.root}>
      <div className={styles.footerlogo}>
        <img src='/static/images/blacklogo.jpg' alt='Dawn Production Logo' />
      </div>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
      <div className={styles.sociallogos}>
        <a href='https://www.instagram.com/dawnmoretti/?hl=en' target='_blank'>
          <img src='/static/images/instagram.jpg' alt='Instagram Logo' />
        </a>
        <a href='https://www.linkedin.com/in/dawn-moretti-95208714'>
          <img src='/static/images/linkedin.jpg' alt='LinkedIn Logo' />
        </a>
      </div>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map((item) => {
              const isActive =
                router.pathname === '/LandingPage' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{
                      pathname: '/LandingPage',
                      query: {slug: item.slug.current}
                    }}
                    as={`/${item.slug.current}`}
                  >
                    <a data-is-active={isActive ? 'true' : 'false'}>{item.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      <div className={styles.membershiplogos}>
        <img src='/static/images/prodparadise.jpeg' alt='Member of Production Paradise' />
        <img style={{paddingTop: 5, paddingBottom: 0}} src='/static/images/erjjjo.png' alt='Certified Green Website' />
        <img src='/static/images/aop.png' alt='AOP' />
        <img src='/static/images/apa.png' alt='APA' />
        <img style={{paddingBottom: 4}} src='/static/images/b.jpg' alt='B Logo' />
        <img src='/static/images/lebook.png' alt='Le Book' />
        <img src='/static/images/albert.png' alt='Albert' />
        <img src='/static/images/adgreen.png' alt='Adgreen' />
      </div>
      <button
        className={`${styles.arrowUp} ${showScroll ? styles.arrowUpShow : ''}`}
        onClick={() => {
          window.scrollTo({top: 0, behavior: 'smooth'})
        }}
      >
        <span />
      </button>

      <div className={styles.copyright}>&copy; DAWN Production 2020</div>

    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string
      }).isRequired
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string
    })
  })
}

export default withRouter(Footer)
