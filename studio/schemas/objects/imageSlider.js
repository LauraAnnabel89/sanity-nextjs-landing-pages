export default {
  type: 'object',
  name: 'imageSlider',
  title: 'Image Slider',
  fields: [
    {
      name: 'image',
      type: 'array',
      of: [{ type: 'figure' }],
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
    prepare({ title, internalLink, caption, media }) {
      return {
        title,
        caption,
        internalLink,
        subtitle: 'Image Slider',
        media
      }
    }
  }
}
