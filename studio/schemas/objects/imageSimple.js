import { FaRegImage } from 'react-icons/fa'

export default {
  name: 'imageSetSimple',
  title: 'Image Set Simple',
  type: 'object',
  icon: FaRegImage,
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true }
      },
      {
        type: 'video',
      }]
    }
  ],
  preview: {
    select: {
      title: 'duration',
      images: 'images'
    },
    prepare(selection) {
      const { images = [] } = selection
      return {
        title: `${images.length} image${images.length !== 1 ? 's' : ''}`,
        media: images[0] || undefined
      }
    }
  }
}
