import { TiFlowMerge } from 'react-icons/ti'

export default {
  name: 'chart',
  title: 'Chart',
  type: 'object',
  icon: TiFlowMerge,
  fields: [
    {
      name: 'data',
      title: 'Data',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    }
  ],

  preview: {
    select: {
      data: 'data'
    },
    prepare: selection => {
      const { data = [] } = selection
      return {
        title: `${data.length} item${data !== 1 ? 's' : ''}`
      }
    }
  }
}
