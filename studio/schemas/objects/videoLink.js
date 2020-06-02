import { TiVideo } from 'react-icons/ti'
import { map } from 'lodash'

const OVERLAP = {
  none: 'Center, no overlap (appears on mouse hover)',
  center: 'Center, overlap',
  left: 'Left, overlap',
  right: 'Right, overlap',
}

export default {
  name: 'videoLink',
  title: 'Link Block Video',
  type: 'object',
  icon: TiVideo,
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
      name: 'ratio',
      title: 'Custom aspect ratio',
      description: 'Insert the percentage of height relative to width here for a custom aspect ratio (eg: 16:9 is 9/16 = 56.25%), leave empty for the nominal ratio',
      type: 'string'
    },
    {
      name: 'link',
      type: 'blockLink',
    },
  ],
  preview: {
    select: {
      link: 'link',
      poster: 'poster',
    },
    prepare(selection) {
      const { link, poster = [] } = selection
      return {
        title: link.internalLink || link.externalLink ? `${link.textTop}` : 'Empty Video Link',
        media: poster || undefined
      }
    }
  }
}
