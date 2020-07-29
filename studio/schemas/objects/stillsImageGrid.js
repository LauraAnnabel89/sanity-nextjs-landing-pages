export default {
  type: 'string',
  name: 'stillsImageGrid',
  title: 'Stills Image Grid',
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
