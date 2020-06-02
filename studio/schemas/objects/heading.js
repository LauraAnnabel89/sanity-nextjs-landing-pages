import React from 'react'
import { FaHeading } from 'react-icons/fa'
import { map } from 'lodash'

const LEVEL = {
  h1: 'H1 (Big)',
  h2: 'H2 (Normal)',
  h3: 'H3 (Small)'
}

const WEIGHT = {
  thin: 'Thin',
  normal: 'Normal',
  bold: 'Bold'
}

const FLAG = {
  disabled: 'Disabled',
  enabled: 'Enabled'
}

const CASE = {
  normal: 'Normal',
  uppercase: 'Uppercase'
}

export default {
  name: 'heading',
  title: 'Custom Heading',
  type: 'object',
  icon: FaHeading,
  fields: [
    {
      name: 'text',
      title: 'Text',
      description: 'Enter the text for the heading',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Set the heading level',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: map(LEVEL, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'Set the weight of the font',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: map(WEIGHT, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      name: 'capitalize',
      title: 'Transform Case',
      type: 'string',
      description: 'Transform the case of the heading, use this if you want to transform the text to be all capitals',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: map(CASE, (val, key) => ({ title: val, value: key }))
      }
    },
    {
      name: 'lettering',
      title: 'Lettering effect',
      type: 'boolean',
      description: 'If enabled the heading will animate the text character by character when the element gets into the viewport',
    },
    {
      name: 'fluid',
      title: 'Make text responsive',
      description: 'If enabled the text will be window-responsive',
      type: 'boolean',
    },
    {
      name: 'collapse',
      title: 'Void margins',
      description: 'If enabled the text wont have any vertical margin',
      type: 'boolean',
    },    
  ],
  preview: {
    select: {
      text: 'text',
      weight: 'weight',
      lettering: 'lettering',
      heading: 'heading',
    },
    prepare: selection => {
      const { text, weight, lettering, heading } = selection
      const title = text || 'Heading (empty)'
      const subtitle = [
        heading && `Level ${heading}` || undefined,
        weight && `Weight ${weight}` || undefined,
        lettering && `Lettering ${lettering}` || undefined,
      ].filter(o => !!o).join(', ')

      return {
        title,
        subtitle,
      }
    }
  }
}
