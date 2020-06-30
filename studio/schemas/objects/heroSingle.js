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
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
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
