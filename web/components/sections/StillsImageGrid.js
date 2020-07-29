import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ImageGrid from './ImageGrid'
import groq from 'groq'
import client from '../../client'

function StillsImageGrid (props) {
  const [stills, setStills] = useState([])

  useEffect(() => {
    const stillsPageQuery = groq`
      *[_type == "stills"]{
        slug,
        title,
        openGraphImage,
        "_key": _id
      }
      `
    client.fetch(stillsPageQuery).then((res) => {
      setStills(res)
      console.log(res)
    })
  }, [setStills])

  if (stills.length === 0) {
    return null
  }

  return (
    <ImageGrid pages={stills} />
  )
}

StillsImageGrid.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  images: PropTypes.object,
  text: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default StillsImageGrid
