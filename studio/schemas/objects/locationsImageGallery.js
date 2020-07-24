export default {
  type: 'object',
  name: 'locationsImageGallery',
  title: 'Image Gallery',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Location name'
    },
    {
      name: 'image',
      type: 'array',
      of: [{type: 'figure'}],
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    },
    prepare ({title, internalLink, caption, media}) {
      return {
        title: title || `${media.length} images`,
        subtitle: 'Image Gallery',
        media
      }
    }
  }
}
