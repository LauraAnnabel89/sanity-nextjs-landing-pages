export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'id',
      title: 'ID',
      type: 'slug'
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'internalLink',
      type: 'reference',
      to: [{type: 'route'}],
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
      link: 'internalLink'
    }
  }
}
