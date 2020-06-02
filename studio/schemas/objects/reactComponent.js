import React from 'react'
import { FaReact } from 'react-icons/fa'
import { map } from 'lodash'

const TYPES = {
  'no-padding': 'No Padding'
}

const SIZES = {
  expanded: 'Expanded',
  full: 'Full'
}

const TEXT_SIZES = {
  small: 'Small'
}

const ALIGN = {
  top: 'Top',
  bottom: 'Bottom'
}

const THEMES = {
  grey: 'Grey Background',
  'grey-red': 'Grey Background, Red Text',
  red: 'Red Background, Yellow Text',
  yellow: 'Yellow Background',
  'yellow-red': 'Yellow Background, Red Text',
  'dark-blue': 'Dark Blue Background',
  'dark-blue-yellow': 'Dark Blue Background, Yellow Text'
}

export default {
  name: 'reactComponent',
  title: 'React Component',
  type: 'object',
  icon: FaReact,
  fields: [
    {
      name: 'name',
      title: 'Component Name',
      description: 'Enter the React component name - DO NOT Touch if you are not a developer or ask one before knowing what to do',
      type: 'string'
    },
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare: selection => {
      const { name } = selection
      const title = [
        'React Component',
        [
          name && `<${name} />` || undefined
        ].filter(o => !!o).join(', ')
      ].filter(o => !!o).join(': ')
      return {
        title,
        subtitle: 'Injects a React component into the layout, please DO NOT Touch if you are not a developer',
      }
    }
  }
}
