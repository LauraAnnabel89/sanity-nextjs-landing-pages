export default {
  type: 'object',
  name: 'stillsImageGallery',
  title: 'Stills Image Gallery',
  fields: [
    {
      name: 'image',
      type: 'array',
      of: [{type: 'figure'}],
      title: 'Images',
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
    prepare ({title, media}) {
      return {
        title: title || `${media.length} images`,
        subtitle: 'Stills Image Gallery'
      }
    }
  }
}
