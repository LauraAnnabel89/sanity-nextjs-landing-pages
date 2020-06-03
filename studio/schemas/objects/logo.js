export default {
  type: 'object',
  name: 'logo',
  title: 'Logo',
  description: 'Best choice is to use an SVG where the color are set with currentColor',
  name: 'logo',
  type: 'array',
  of: [
    {
      type: 'image'
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
        subtitle: 'Two Column Images',
        media
      }
    }
  }
}
