import {FaPhotoVideo} from 'react-icons/fa'

function slugify (string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default {
  name: 'stills',
  type: 'document',
  title: 'Stills',
  icon: FaPhotoVideo,
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
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: 'URL Slug for the Stills page, all stills page must be prepended with the "stills/" slug URL, press "Generate" to generate the slug from your title above',
      options: {
        source: 'title',
        readonly: true,
        slugify: input => `stills/${slugify(input.slice(0, 200))}`
      }
    },
    {
      name: 'image',
      type: 'array',
      of: [{type: 'figureGallery'}],
      title: 'Image Gallery',
      options: {
        hotspot: true
      }
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
