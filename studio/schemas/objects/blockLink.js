import { TiLink } from 'react-icons/ti'
import { map } from 'lodash'

const OVERLAP = {
  none: 'Center, no overlap (appears on mouse hover)',
  center: 'Center, overlap',
  left: 'Left, overlap',
  right: 'Right, overlap',
}

export default {
  name: 'blockLink',
  title: 'Link Block',
  type: 'object',
  icon: TiLink,
  fields: [
    {
      name: 'internalLink',
      title: 'Internal site link',
      description: 'Links this image with a page on the site, use this to bind strong references between pages', 
      type: 'reference',
      to: [{ type: 'page' }, { type: 'work' }],
    },
    {
      name: 'externalLink',
      title: 'or External link',
      description: '...or alternatively you can set a link to an external site, take note that if a reference above is made then the external link wont show (must start with http:// or https://)', 
      type: 'url',
    },
    {
      name: 'textTop',
      title: 'Text Top',
      description: 'Big letters on the top line, take note that if this image is not a link then the text wont show', 
      type: 'string',
    },
    {
      name: 'textBottom',
      title: 'Text Bottom',
      description: 'Small text on the bottom line, take note that if this image is not a link then the text wont show', 
      type: 'string',
    },
    {
      name: 'width',
      title: 'Width %',
      description: 'Choose the width of the image relative to the parent element, if not set (0%) the image will expand as it would be wide 100%',
      type: 'number',
      options: {
        range: {min: 0, max: 100, step: 5}
      }
    },    
    {
      name: 'overlap',
      title: 'Text overlap',
      type: 'string',
      description: 'Sets the text position, can be overlapped or centered. If overlapped the image will be resized down accordingly and the width above ignored',
      options: {
        layout: 'radio',
        direction: 'vertical',
        list: map(OVERLAP, (val, key) => ({ title: val, value: key }))
      }
    },
  ],
  preview: {
    select: {
      title: 'textTop',
      internalLink: 'internalLink',
      externalLink: 'externalLink',
    },
    prepare(selection) {
      const { title, image = [] } = selection
      return {
        title: title || internalLink || externalLink || 'Empty Link Block',
      }
    }
  }
}
