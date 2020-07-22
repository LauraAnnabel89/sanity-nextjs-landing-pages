export default {
  type: 'object',
  name: 'imageGrid',
  title: 'Image Grid',
  fields: [
    {
      name: 'image',
      type: 'array',
      of: [{type: 'figure'}],
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Limit grid',
      description: 'Limits the grid to this maximum images in a single row',
      name: 'limitGrid',
      type: 'string',
      options: {
        list: [
          {title: 'Responsive (5 Images)', value: ''},
          {title: '3 Images', value: '3'},
          {title: '4 Images', value: '4'}
        ]
      }
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare ({title, internalLink, caption, media}) {
      return {
        title: title || 'Untitled Image Grid Section',
        caption,
        internalLink,
        subtitle: 'Image Grid',
        media
      }
    }
  }
}
