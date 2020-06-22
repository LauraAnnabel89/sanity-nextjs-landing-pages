export default {
  type: 'object',
  name: 'fourColumn',
  title: 'Four Column Images',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'image',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Four Column Images',
        media
      }
    }
  }
}
