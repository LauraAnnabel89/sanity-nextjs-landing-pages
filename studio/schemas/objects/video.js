import React from 'react'
// import { TiVideoOutline } from 'react-icons/ti'
import { map } from 'lodash'

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  // icon: TiVideoOutline,
  fields: [
    {
      name: 'url',
      title: 'Video Link',
      description: 'Enter the URL for the video\nSupports videos from: YouTube, Facebook, SoundCloud, Streamable, Vidme, Vimeo, Wistia, Twitch, DailyMotion',
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
      description: 'If selected the video will autoplay and loop but it will be muted, use this if you want to present a background video',
      type: 'boolean'
    },
    {
      name: 'ratio',
      title: 'Custom aspect ratio',
      description: 'Insert the percentage of height relative to width here for a custom aspect ratio (eg: 16:9 is 9/16 = 56.25%), leave empty for the nominal ratio',
      type: 'string'
    },
  ],
  preview: {
    select: {
      url: 'url',
      poster: 'poster',
    },
    prepare: selection => {
      const { url, poster } = selection
      const title = 'Video'
      const subtitle = url || 'Video URL Missing!'
      return {
        title,
        subtitle,
        media: poster || undefined,
      }
    }
  }
}
