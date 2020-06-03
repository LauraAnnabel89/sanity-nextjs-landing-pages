export default {
  name: 'textSectionThreeColumns',
  title: 'Text Section Three Columns',
  type: 'object',

  fields: [
    {
      name: 'headingColumnOne',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'textColumnOne',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'headingColumnTwo',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'textColumnTwo',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'headingColumnThree',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'textColumnThree',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section'
      }
    }
  }
}
