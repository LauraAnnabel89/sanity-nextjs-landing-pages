import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import InlineSVG from 'react-inlinesvg'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Mailchimp from './sections/Mailchimp'

function Footer (props) {
  const {navItems, text, router, image, alt, caption, asset, sociallogos} = props

  const [showScroll, setShowScroll] = useState(false)
  const isServer = typeof window === 'undefined'

  if (!isServer) {
    const checkScrollTop = () => {
      if (window.pageYOffset <= window.innerHeight) {
        setShowScroll(false)
        return
      }

      const minThreshold = (document.body.scrollHeight * 0.5) - window.innerHeight - 10
      const maxThreshold = document.body.scrollHeight - window.innerHeight - 200

      if (!showScroll && window.pageYOffset > minThreshold && window.pageYOffset < maxThreshold) {
        setShowScroll(true)
      } else if (showScroll && (window.pageYOffset <= minThreshold || window.pageYOffset >= maxThreshold)) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
  }

  return (
    <div className={styles.root}>
      <div className={styles.footerlogo}>
        <InlineSVG src='/static/images/dawn.svg' alt='Dawn Production' />
      </div>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
      <div className={styles.sociallogos}>
        <a target='_blank' rel='nofollow' href='https://www.instagram.com/dawnmoretti/?hl=en'>
          <img draggable={false} onDragStart={() => false} src='/static/images/instagram.jpg' alt='Instagram Logo' />
        </a>
        <a target='_blank' rel='nofollow' href='https://www.linkedin.com/company/dawn-production'>
          <img draggable={false} onDragStart={() => false} src='/static/images/linkedin.jpg' alt='LinkedIn Logo' />
        </a>
        <a target='_blank' rel='nofollow' href='https://www.facebook.com/DAWNProductionUK'>
          <img draggable={false} onDragStart={() => false} src='/static/images/facebook.jpg' alt='Facebook Logo' />
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

      <div className={styles.flexContainer}>
        <div className={styles.copyright}>&copy; DAWN Production 2020</div>

        <div className={styles.membershiplogos}>

          <a target='_blank' rel='nofollow' href='https://productionparadise.com/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/prod-paradise.png' alt='Member of Production Paradise' />
          </a>
          <a target='_blank' rel='nofollow' href='https://erjjiostudios.com/'>
            <img draggable={false} onDragStart={() => false} style={{paddingTop: 5, paddingBottom: 0}} src='/static/images/erjjjo.png' alt='Certified Green Website' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.the-aop.org/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/aop.png' alt='AOP' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.a-p-a.net/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/apa.png' alt='APA' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.lbbonline.com/'>
            <img draggable={false} onDragStart={() => false} style={{paddingBottom: 7}} src='/static/images/b.png' alt='B Logo' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.lebook.com/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/lebook.png' alt='Le Book' />
          </a>
          <a target='_blank' rel='nofollow' href='https://wearealbert.org/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/albert.png' alt='Albert' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.weareadgreen.org/'>
            <img draggable={false} onDragStart={() => false} src='/static/images/adgreen.png' alt='Adgreen' />
          </a>
        </div>

        <button
          className={styles.arrowUp}
          onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
        >
          <InlineSVG src='/static/images/arrow.svg' alt='Go back up' />
        </button>
      </div>

      <button
        className={`${styles.arrowUpFloat} ${showScroll ? styles.arrowUpShow : ''}`}
        onClick={() => {
          window.scrollTo({top: 0, behavior: 'smooth'})
        }}
      >
        <InlineSVG src='/static/images/arrow.svg' alt='Go back up' />
      </button>
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
