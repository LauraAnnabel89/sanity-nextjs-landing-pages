export default {
  type: 'object',
  title: 'Legal Section',
  name: 'legalSection',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'headingIndex',
      title: 'Heading for Index column',
      type: 'string'
    },
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
            {title: 'Title', value: 'h2'}
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
    select: {
      heading: 'heading'
    },
    prepare ({heading}) {
      return {
        title: heading || 'Untitled Legal Section',
        subtitle: 'Legal copy section'
      }
    }
  }
}
