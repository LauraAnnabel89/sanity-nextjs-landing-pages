export default {
  name: 'imageSection',
  title: 'Image',
  type: 'object',
  of: [
    {
      type: 'image',
      options: { hotspot: true }
    }
  ],
  fields: [
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media
      }
    }
  }
}
