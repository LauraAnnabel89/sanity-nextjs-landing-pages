export default {
  type: 'object',
  name: 'fullbleedimage',
  title: 'Full Bleed Image',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'backgroundImage',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Background image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Full Bleed Image',
        media
      }
    }
  }
}
