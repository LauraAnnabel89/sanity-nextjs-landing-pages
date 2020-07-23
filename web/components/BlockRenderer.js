import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

function BlockRenderer (props) {
  const {style = 'normal'} = props.node

  if (/^h2$/.test(style)) {
    const [text] = props.children
    const id = text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
    return React.createElement(style, {id}, props.children)
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

export default BlockRenderer

BlockRenderer.propTypes = {
  props: PropTypes.object
}
