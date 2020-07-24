export default {
  name: 'contactsSection',
  title: 'Contacts Section',
  type: 'object',
  fields: [

    {
      title: 'Contacts',
      name: 'contacts',
      type: 'array',
      of: [
        {
          name: 'contact',
          title: 'Person',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Job Title'
            },
            {
              name: 'name',
              type: 'string',
              title: 'Full name'
            },
            {
              name: 'number',
              type: 'string',
              title: 'Phone Number'
            },
            {
              name: 'email',
              type: 'string',
              title: 'Email Address'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      contacts: 'contacts'
    },
    prepare ({contacts}) {
      return {
        title: `Section with ${contacts.length} Contacts`,
        subtitle: 'Contacts section'
      }
    }
  }
}
