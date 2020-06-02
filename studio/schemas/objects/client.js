import { TiBusinessCard } from 'react-icons/ti'

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  icon: TiBusinessCard,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
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
      name: 'caseStudy',
      title: 'Case Study',
      type: 'reference',
      to: [{type: 'work'}]
    }
  ],

  preview: {
    select: {
      title: 'name',
      logo: 'logo',
      image: 'image'
    },
    prepare: selection => {
      const { title, logo, image } = selection
      return {
        title,
        media: image || logo
      }
    }
  }
}
