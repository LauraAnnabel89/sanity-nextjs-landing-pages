export default {
  name: 'locatios',
  type: 'document',
  title: 'Location',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{ type: 'imageGrid' }, { type: 'imageSlider' }]
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
