import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ContactsSection.module.css'
import client from '../../client'

function ContactsSection (props) {
  const {contacts} = props

  console.log(contacts)

  if (!contacts.length === 0) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {contacts.map((contact) => (
          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>
              <span>{contact.title}</span>
            </h3>
            <p className={styles.contactName}>{contact.name}</p>
            <a href={`tel:${contact.number}`} className={styles.contactNumber}>{contact.number}</a>
            <a href={`mailto:${contact.email}`} className={styles.contactEmail}>{contact.email}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

ContactsSection.propTypes = {
  contacts: PropTypes.array
}

export default ContactsSection
