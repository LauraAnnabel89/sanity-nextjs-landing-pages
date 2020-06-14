import { TiThMenu } from 'react-icons/ti'

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: TiThMenu,
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'slug'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'URL',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            }
          ],
          preview: {
            select: {
              name: 'name',
              url: 'url'
            },
            prepare: selection => {
              const { name, url } = selection
              return {
                title: name || url,
                subtitle: name ? (url || undefined) : undefined
              }
            }
          }
        },
        {
          type: 'reference',
          title: 'Page',
          to: [ { type: 'page' } ]
        }
      ]
    }
  ],

  preview: {
    select: {
      slug: 'id'
    },
    prepare: selection => {
      const { slug } = selection
      return {
        title: slug && slug.current || undefined
      }
    }
  }
}
