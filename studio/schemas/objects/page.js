import { TiDocumentText } from 'react-icons/ti'
import { map } from 'lodash'

const THEMES = {
  yellow: 'Yellow Background',
  blue: 'Blue Background',
}

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: TiDocumentText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
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
      title: 'Page Builder',
      name: 'content',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare(selection) {
      const {title, subtitle, header, slug, thumbnail} = selection
      return {
        title,
        subtitle: '',
        description: `https://aesopagency.com/${slug.current}`,
        media: null,
      }
    }
  }  
}
