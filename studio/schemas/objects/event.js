import { TiCalendarOutline } from 'react-icons/ti'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: TiCalendarOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  orderings: [
    {
      title: 'Date',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    }
  }
}
