export default {
  type: 'object',
  name: 'stillsImageGallery',
  title: 'Stills Image Gallery',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
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
    prepare ({title, media}) {
      return {
        title: title || `${media.length} images`,
        subtitle: 'Stills Image Gallery'
      }
    }
  }
}
