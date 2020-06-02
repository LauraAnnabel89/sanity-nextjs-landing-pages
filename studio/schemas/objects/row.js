import { FiLayout } from 'react-icons/fi'
import { map } from 'lodash'

const SIZES = {
  expanded: 'Full-width',
}

const ALIGN = {
  top: 'Top',
  middle: 'Middle',
  bottom: 'Bottom'
}

const ALIGN_H = {
  start: 'Left',
  center: 'Center',
  end: 'Right'
}

const THEMES = {
  grey: 'Grey Background',
  red: 'Red Background',
  yellow: 'Yellow Background',
  blue: 'Blue Background',
}

export default {
  name: 'row',
  title: 'Row',
  type: 'object',
  icon: FiLayout,
  fields: [
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: map(THEMES, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      name: 'align',
      title: 'Vertical Align',
      description: 'How the inner columns will be aligned',
      type: 'string',
      options: {
        list: map(ALIGN, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      name: 'anchor',
      title: 'Horizontal Align',
      description: 'How the inner columns will be horizontally aligned',
      type: 'string',
      options: {
        list: map(ALIGN_H, (val, key) => ({ title: val, value: key }))
      }
    },     
    {
      name: 'height',
      title: 'Minimum Height %',
      description: 'Minimum height proportional to vertical screen size of the current element',
      type: 'number',
      options: {
        range: {min: 0, max: 100, step: 5}
      }
    },
    {
      name: 'padding',
      title: 'Spacing',
      description: 'Define the vertical padding of this row',
      type: 'number',
      options: {
        range: {min: 0, max: 80, step: 20}
      }
    },
    {
      name: 'size',
      title: 'Fill screen width',
      description: 'If enabled this row expands to the full width of the screen',
      type: 'boolean',
    },
    {
      name: 'overflow',
      title: 'Mask elements',
      description: 'If enabled this row will mask elements outside the boundaries, necessary if you want to prevent parallaxed columns to overlap',
      type: 'boolean',
    },
    {
      name: 'expandable',
      title: 'Make this row expandable?',
      description: 'If enabled the row will show a "More info about this project +" button and will be rendered as an accordion',
      type: 'boolean',
    },
    {
      name: 'expandableTitle',
      title: 'Label for the expand button',
      description: 'Customize the button text if the option above is enabled.',
      type: 'string',
    },      
    {
      name: 'collapse',
      title: 'Collapse columns',
      description: 'If enabled all columns inside won\'t have any padding',
      type: 'boolean',
    },
    {
      name: 'frontpage',
      title: 'Show only on frontpage',
      description: 'If enabled this row will be hidden if called on from other pages',
      type: 'boolean',
    },

  ],
  preview: {
    select: {
      size: 'size',
      align: 'align',
      theme: 'theme',
      height: 'height'
    },
    prepare: selection => {
      const { size, align, theme, height } = selection
      const title = 'Row';
      const subtitle = 'Opens a new row of columns, you should add columns here (for a maximum of 12 summed in size)';
      const description = [
          SIZES[size],
          align && `Align ${align}` || undefined,
          THEMES[theme],
          height && `${height}% Height` || undefined
        ].filter(o => !!o).join(', ').concat('\n')
      return {title, subtitle, description}
    }
  }
}
