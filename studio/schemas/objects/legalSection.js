export default {
  type: 'object',
  title: 'Legal Section',
  name: 'legalSection',
  fields: [
    {
      name: 'text',
      title: 'Text',
      description: 'Please use Titles (h1) to mark the content index',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Title', value: 'h1'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [{type: 'link'}, {type: 'internalLink'}]
          }
        },
        {type: 'figure'},
        {type: 'embedHTML'}
      ]
    }
  ],
  preview: {
    prepare () {
      return {
        title: 'Legal Section',
        subtitle: 'Legal copy section'
      }
    }
  }
}
