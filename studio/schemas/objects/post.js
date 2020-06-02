import { TiBook } from 'react-icons/ti'

export default {
  name: 'post',
  title: 'Journal',
  type: 'document',
  icon: TiBook,
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
      name: 'header',
      title: 'Header image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'published',
      title: 'Published',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    }
  ],

  orderings: [
    {
      title: 'Published',
      name: 'publishedDesc',
      by: [{ field: 'published', direction: 'desc' }]
    }
  ],

  prepare(selection) {
    const { author, body } = selection
    return Object.assign({}, selection, {
      subtitle: '',
      description: ''
    })
  }
}
