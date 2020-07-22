export default {
  title: 'Legal Copy with Indexes',
  name: 'textIndex',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'portableText',
      description: 'Stay accuorta',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Title', value: 'h2'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      },    
    },
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
