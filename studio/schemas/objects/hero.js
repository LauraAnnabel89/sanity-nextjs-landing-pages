export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'image',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'reverseColour',
      description: 'Title is white by default, switch this on to make it black',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare ({title, media}) {
      return {
        title,
        subtitle: 'Hero section',
        media
      }
    }
  }
}
