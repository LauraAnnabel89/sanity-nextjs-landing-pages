function findVal (object, key) {
  let value
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k]
      return true
    }
    if (object[k] && typeof object[k] === 'object') {
      value = findVal(object[k], key)
      return value !== undefined
    }
  })
  return value
}

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
      label: 'label',
      heading: 'heading',
      text: 'text'
    },
    prepare ({heading, label, text}) {
      const value = findVal(text, 'text')
      const body = value || undefined
      return {
        title: heading || label || body || 'Empty Text Section',
        subtitle: 'Text section'
      }
    }
  }
}
