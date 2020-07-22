import React from 'react'
import { map } from 'lodash'

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video Link',
      description: 'Enter the URL for the video from Vimeo',
      type: 'url'
    },
    {
      name: 'poster',
      title: 'Thumbnail',
      description: 'Select the image to use as a placeholder frame',
      type: 'image'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      description:
        'If selected the video will autoplay and loop but it will be muted, use this if you want to present a background video',
      type: 'boolean'
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      url: 'url',
      poster: 'poster',
      caption: 'caption'
    },
    prepare: selection => {
      const { url, poster, caption } = selection
      const title = caption || 'Uncaptioned Video'
      const subtitle = url || 'Video URL Missing!'
      return {
        title,
        subtitle,
        media: poster || undefined
      }
    }
  }
}
