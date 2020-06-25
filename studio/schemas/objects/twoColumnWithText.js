export default {
  type: 'object',
  name: 'twoColumnWithText',
  title: 'Two Column With Text',
  fields: [
    {
      name: 'reverseOrder',
      description: 'Image is on the left by default, reverse the order by toggling this on',
      type: 'boolean'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },
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
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Two Column With Text',
        media
      }
    }
  }
}
