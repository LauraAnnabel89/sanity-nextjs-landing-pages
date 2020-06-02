import React from 'react'

export default {
  title: 'Page Builder',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'row'
    },
    {
      type: 'column'
    },
    {
      type: 'imageLink'
    },
    {
      type: 'videoLink'
    },
    {
      type: 'imageSet'
    },
    {
      type: 'video'
    },
    {
      type: 'reactComponent'
    }
  ]
}
