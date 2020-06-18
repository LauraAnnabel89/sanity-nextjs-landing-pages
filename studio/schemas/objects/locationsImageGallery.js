export default {
  type: 'object',
  name: 'locationsImageGallery',
  title: 'Locations Image Gallery',
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
        subtitle: 'Locations Image Gallery',
        media
      }
    }
  }
}
