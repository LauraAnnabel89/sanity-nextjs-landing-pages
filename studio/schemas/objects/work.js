import { TiCameraOutline } from 'react-icons/ti'
import { FaPalette, FaRegImage } from 'react-icons/fa'
import { map } from 'lodash'

const THEMES = {
  yellow: 'Yellow Background',
  blue: 'Blue Background'
}

export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: FaPalette,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Used for sorting',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'header',
      title: 'Header',
      type: 'imageSetSimple'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'imageSetSimple',
      description: 'Will use header image otherwise'
    },
    {
      name: 'navbar',
      title: 'Navbar colour',
      type: 'string',
      options: {
        list: map(THEMES, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      title: 'Project Intro',
      name: 'intro',
      type: 'simpleContent',
      description: 'The text to appear just right before the "More info" CTA'
    },
    {
      title: 'More information',
      name: 'more',
      type: 'simpleContent',
      description: 'The extra information hidden under the expandable "More info" CTA'
    },
    {
      title: 'Page Builder',
      name: 'content',
      type: 'blockContent',
      description: 'Drop here all the building blocks for the rest of the page'
    }
  ],

  orderings: [
    {
      title: 'Date',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      header: 'header',
      slug: 'slug',
      thumbnail: 'thumbnail'
    },
    prepare(selection) {
      const { title, subtitle, header, slug, thumbnail } = selection
      return {
        title,
        subtitle,
        description: `https://aesopagency.com/our-work/${slug.current}`,
        media:
          header.images[0] && header.images[0]._type === 'image'
            ? header.images[0]
            : thumbnail.images[0]
      }
    }
  }
}
