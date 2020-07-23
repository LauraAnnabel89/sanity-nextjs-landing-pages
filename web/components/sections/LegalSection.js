import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './LegalSection.module.css'

function LegalSection (props) {
  const {text, heading, headingIndex} = props
  const titles = text.filter((row) => row.style === 'h2')

  const RenderTitle = (title) => {
    const {_key, children} = title
    const [row] = children
    const {text} = row
    const link = text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')

    return (
      <a className={styles.indexLink} href={`#${link}`} key={_key}>{text}</a>
    )
  }

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <aside className={styles.indexes}>
          {headingIndex && <h4>{headingIndex}</h4>}
          <div className={styles.scrollable}>
            {titles.map((title) => RenderTitle(title))}
          </div>
        </aside>
        <main className={styles.legal}>
          {heading && <h1>{heading}</h1>}
          {text && <SimpleBlockContent blocks={text} />}
        </main>
      </section>
    </div>
  )
}

LegalSection.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object)
}

export default LegalSection
