export default {
  type: 'object',
  name: 'imageGrid',
  title: 'Image Grid',
  fields: [
    {
      name: 'image',
      type: 'array',
      of: [{ type: 'figure' }],
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Image Grid',
        media
      }
    }
  }
}
