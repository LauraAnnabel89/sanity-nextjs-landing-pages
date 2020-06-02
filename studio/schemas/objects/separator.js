import { TiMinus } from 'react-icons/ti'

export default {
  name: 'separator',
  title: 'Separator',
  type: 'object',
  icon: TiMinus,
  fields: [
    {
      name: 'weight',
      title: 'Weight',
      type: 'number'
    }
  ],
  preview: {
    prepare: selection => {
      return {
        title: 'Separator'
      }
    }
  }
}
