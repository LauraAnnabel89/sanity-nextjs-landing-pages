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
        {type: 'videoGrid'},
        {type: 'contactsSection'}
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
      fieldset: 'metadata',
      options: {
        hotspot: true
      }
    },
    {
      name: 'headerInvert',
      type: 'boolean',
      title: 'Invert Navigation menu colors',
      description: 'By switching this on the navigation bar at the top will be black instead of white, this is useful for pages with only legal copy on'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
