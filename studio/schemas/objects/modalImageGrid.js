export default {
  type: 'object',
  name: 'modalImageGrid',
  title: 'Modal Image Grid',
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
    prepare({ title, internalLink, caption, media }) {
      return {
        title,
        caption,
        subtitle: 'Modal Image Grid',
        media
      }
    }
  }
}
