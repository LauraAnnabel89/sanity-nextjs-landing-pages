import { TiImage } from 'react-icons/ti'
import { map } from 'lodash'

export default {
  name: 'imageLink',
  title: 'Link Block Image',
  type: 'object',
  icon: TiImage,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'link',
      type: 'blockLink',
    }
  ],
  preview: {
    select: {
      link: 'link',
      image: 'image',
    },
    prepare(selection) {
      const { link, image = [] } = selection
      return {
        title: link.internalLink || link.externalLink ? `${link.textTop}` : 'Empty Image Link',
        media: image || undefined
      }
    }
  }
}
