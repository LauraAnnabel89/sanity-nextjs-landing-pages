import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'
import styles from './Mailchimp.module.css'

export default function Mailchimp (props) {
  const {heading, subtitle, actionUrl, legalCopy} = props

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {legalCopy && <p className={styles.legalCopy}>{legalCopy}</p>}
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Your email address',
                type: 'email',
                required: true
              }
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: '#000'
              },
              successMsg: {
                color: '#000'
              },
              duplicateMsg: {
                color: '#000'
              },
              errorMsg: {
                color: '#000'
              }
            }}
            messages={{
              sending: 'Sending...',
              success: 'Thanks for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Already subscribed',
              button: 'Sign Up'
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string
}
