export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'fourColumn'},
        {type: 'hero'},
        {type: 'heroSingle'},
        {type: 'imageGrid'},
        {type: 'imageSection'},
        {type: 'mailchimp'},
        {type: 'locationsImageGallery'},
        {type: 'stillsImageGallery'},
        {type: 'stillsImageGrid'},
        {type: 'textSection'},
        {type: 'twoColumn'},
        {type: 'twoColumnWithText'},
        {type: 'threeColumn'},
        {type: 'textSectionThreeColumns'},
        {type: 'legalSection'},
        {type: 'video'},
        {type: 'videoGrid'}
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
