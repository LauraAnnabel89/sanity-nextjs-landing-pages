import { FaColumns } from 'react-icons/fa'
import { map } from 'lodash'

const ALIGN = {
  start: 'Left',
  center: 'Center',
  end: 'Right',
}

const ANCHOR = {
  start: 'Left',
  end: 'Right',
}

const LAYER = {
  top: 'Top',
  bottom: 'Bottom',
}

export default {
  name: 'column',
  title: 'Column',
  type: 'object',
  icon: FaColumns,
  fields: [
    {
      name: 'size',
      title: 'Column size',
      description: 'Choose column size from 1 to 12 (Using 0 the column will resize automatically)',
      type: 'number',
      options: {
        range: {min: 0, max: 12, step: 1}
      }
    },
    {
      name: 'align',
      title: 'Text alignment',
      type: 'string',
      options: {
        list: map(ALIGN, (val, key) => ({ title: val, value: key }))
      }
    },    
    {
      name: 'parallaxAmount',
      title: 'Parallax Strength',
      description: 'Higher the strength larger the offset of the scrolling element',
      type: 'number',
      options: {
        range: {min: 0, max: 300, step: 5}
      }
    },
    {
      name: 'layer',
      title: 'Layer order',
      description: 'Set the layer of the column',
      type: 'string',
      options: {
        list: map(LAYER, (val, key) => ({ title: val, value: key }))
      }        
    },    
    {
      name: 'offset',
      title: 'Vertical Margin',
      description: 'Set the vertical offset of the column',
      type: 'string',
    },
    {
      name: 'anchor',
      title: 'Side of anchor',
      description: 'Set the side from where the column should grow',
      type: 'string',
      options: {
        list: map(ANCHOR, (val, key) => ({ title: val, value: key }))
      }      
    },
  ],
  preview: {
    select: {
      size: 'size',
      offset: 'offset',
      parallaxAmount: 'parallaxAmount',
    },
    prepare: selection => {
      const { size, offset, parallaxAmount } = selection
      const title = 'Column';
      const subtitle = 'Opens a new column, all elements below will be part of this block';
      const description = [
        size > 0 ? `${size} columns` : undefined,
        offset ? `Offsetted by ${offset}` : undefined,
        parallaxAmount ? `Parallax strength: ${parallaxAmount}` : undefined,
      ].filter(o => !!o).join(', ')
      return {title, subtitle, description}
    }
  }
}
