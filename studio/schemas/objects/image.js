import { TiImageOutline } from 'react-icons/ti'
import { map } from 'lodash'

const OVERLAP = {
  none: 'Center, no overlap (appears on mouse hover)',
  center: 'Center, overlap',
  left: 'Left, overlap',
  right: 'Right, overlap',
}

export default {
  name: 'imageSet',
  title: 'Image',
  type: 'object',
  icon: TiImageOutline,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: {
      title: 'textTop',
      image: 'image',
    },
    prepare(selection) {
      const { title, image = [] } = selection
      return {
        title: title || 'Image',
        media: image || undefined
      }
    }
  }
}
