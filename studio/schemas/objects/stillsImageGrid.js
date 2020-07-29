export default {
  type: 'object',
  name: 'stillsImageGrid',
  title: 'Stills Image Grid',
  fields: [
    {
      type: 'boolean',
      name: 'fetch',
      title: 'Enable to pull automatically all stills pages'
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare ({title, internalLink, caption, media}) {
      return {
        title: 'Stills Image Grid',
        caption,
        internalLink,
        subtitle: 'Stills Image Grid',
        media
      }
    }
  }
}
