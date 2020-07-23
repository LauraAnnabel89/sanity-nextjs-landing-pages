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
    },
    {
      title: 'Text alignment',
      name: 'textAlign',
      type: 'string',
      options: {
        list: [
          {title: 'Center (Default)', value: ''},
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'}
        ]
      }
    },
    {
      title: 'Font weight',
      name: 'fontWeight',
      type: 'string',
      options: {
        list: [
          {title: 'Normal (Default)', value: ''},
          {title: 'Force thin', value: 'thin'},
          {title: 'Force bold', value: 'bold'}
        ]
      }
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
