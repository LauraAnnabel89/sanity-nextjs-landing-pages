export default {
  type: 'object',
  name: 'twoColumn',
  title: 'Two Column Images',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'image',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare ({title, media}) {
      return {
        title: title || `${media.length} Images` || 'Empty Two Columns Section',
        subtitle: 'Two Column Images',
        media
      }
    }
  }
}
