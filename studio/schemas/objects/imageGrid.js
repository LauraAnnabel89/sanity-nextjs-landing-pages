export default {
  type: 'array',
  name: 'imageGrid',
  title: 'Image Grid',
  fields: [
    {
      name: 'title',
      type: 'array',
      of: [{ name: 'title', type: 'string' }],
      title: 'Title'
    },
    {
      name: 'image',
      type: 'array',
      of: [{ name: 'image', type: 'image' }],
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Image Grid',
        media
      }
    }
  }
}
