export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
    },
    {
      name: 'image',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'reverseColour',
      description:
        'Logo, navigation items and title are black by default, switch this on to make them white',
      type: 'boolean'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta'
        }
      ]
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
        subtitle: 'Hero section',
        media
      }
    }
  }
}
