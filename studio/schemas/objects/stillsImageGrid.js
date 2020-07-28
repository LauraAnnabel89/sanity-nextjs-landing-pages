export default {
  type: 'object',
  name: 'stillsImageGrid',
  title: 'Stills Image Grid',
  fields: [
    {
      name: 'pages',
      title: 'Link to pages',
      weak: true,
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'stills'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare ({title, internalLink, caption, media}) {
      return {
        title,
        caption,
        internalLink,
        subtitle: 'Stills Image Grid',
        media
      }
    }
  }
}
