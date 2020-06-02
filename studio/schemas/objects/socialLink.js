export default {
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url'
    }
  }
}
