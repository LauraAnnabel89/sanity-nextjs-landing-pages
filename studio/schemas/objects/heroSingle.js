export default {
  type: 'object',
  name: 'heroSingle',
  title: 'Hero Single',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'reverseColour',
      description: 'Title is white by default, switch this on to make it black',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero Single section',
        media
      }
    }
  }
}
