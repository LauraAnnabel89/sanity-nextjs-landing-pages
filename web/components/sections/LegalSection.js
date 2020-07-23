import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './LegalSection.module.css'

function LegalSection (props) {
  const {text} = props
  const titles = text.filter((row) => row.style === 'h1')
  console.log(titles)
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
          {titles.map((title) => RenderTitle(title))}
        </aside>
        <main className={styles.legal}>
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
