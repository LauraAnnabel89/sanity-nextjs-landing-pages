export default {
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'array',
  of: [
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{ type: 'page' }, { type: 'work' }, { type: 'post' }]
        },
        {
          name: 'span',
          title: 'Span',
          type: 'number',
          description: '0 - 1, default 1 (full width)'
        },
        {
          name: 'horizontalAdjust',
          title: 'Horizontal Adjust',
          type: 'number',
          description: '0 - 1'
        },
        {
          name: 'verticalAdjust',
          title: 'Vertical Adjust',
          type: 'number',
          description: '0 - 1'
        },
        {
          name: 'parallaxDirection',
          title: 'Parallax Direction',
          type: 'string',
          options: {
            list: [
              { value: 'horizontal', title: 'Horizontal' },
              { value: 'vertical', title: 'Vertical' }
            ]
          }
        },
        {
          name: 'parallaxAmount',
          title: 'Parallax Amount',
          type: 'number'
        }
      ]
    },
    { type: 'imageSet' },
    {
      type: 'object',
      name: 'spacer',
      title: 'Spacer',
      fields: [
        {
          name: 'span',
          title: 'Span',
          type: 'number',
          description: '0 - 1, default 1 (full width)'
        }
      ],
      preview: {
        select: {
          span: 'span'
        },
        prepare: () => ({
          title: 'Spacer'
        })
      }
    }
  ]
}
