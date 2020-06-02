import { TiThSmallOutline } from 'react-icons/ti'

export default {
  name: 'clientGrid',
  title: 'Client Grid',
  type: 'object',
  icon: TiThSmallOutline,
  fields: [
    {
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'client'}]
      }]
    }
  ],
  preview: {
    select: {
      clients: 'clients'
    },
    prepare(selection) {
      const { clients = [] } = selection
      return {
        title: `${clients.length} client${clients.length !== 1 ? 's' : ''}`
      }
    }
  }
}
