export default {
  type: 'object',
  name: 'stillsImageGallery',
  title: 'Stills Image Gallery',
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
        internalLink,
        subtitle: 'Stills Image Gallery',
        media
      }
    }
  }
}
