export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare ({heading}) {
      return {
        title: heading || 'Untitled Text Section',
        subtitle: 'Text section'
      }
    }
  }
}
