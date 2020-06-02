import { TiUserOutline } from 'react-icons/ti'

export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: TiUserOutline,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string'
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
      options: {
        editModal: 'popover'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image'
    }
  }
}
