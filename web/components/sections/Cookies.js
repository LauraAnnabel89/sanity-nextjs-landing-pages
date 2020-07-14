import React from 'react'
import CookieConsent from 'react-cookie-consent'

const Cookies = () => {
  return (
    <CookieConsent
      location='bottom'
      buttonText='I Accept'
      cookieName='cookie-gdpr-viewed'
      style={{
        fontFamily: 'Gilroy',
        background: '#fff',
        color: '#000',
        zIndex: 1005,
        padding: '1rem'
      }}
      buttonStyle={{
        background: '#272727',
        color: '#fff',
        textTransform: 'uppercase'
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
}

export default Cookies
