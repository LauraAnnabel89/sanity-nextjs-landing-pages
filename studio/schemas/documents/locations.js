export default {
  name: 'locations',
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
      of: [
        { type: 'figure' },
        { type: 'hero' },
        { type: 'homePage' },
        { type: 'homepagevideo' },
        { type: 'imageGrid' },
        { type: 'imageSection' },
        { type: 'imageSlider' },
        { type: 'mailchimp' },
        { type: 'twoColumn' },
        { type: 'textSection' },
        { type: 'textSectionThreeColumns' },
        { type: 'video' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
