export default {
  type: 'object',
  name: 'imageSliderContainer',
  title: 'Image Slider Container',
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
        subtitle: 'Image Slider Container',
        media
      }
    }
  }
}
