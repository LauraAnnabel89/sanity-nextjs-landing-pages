export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ece5f281d79187ae7437726',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ckhj43nt',
                  apiId: 'ba2075cd-4846-4800-a61e-55148e603acc'
                },
                {
                  buildHookId: '5ece5f28aa5b9a80fce7dc03',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7y7c8hzu',
                  apiId: '08d46286-87fb-43db-ad33-588162bab08b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LauraAnnabel89/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-nextjs-landing-pages-web-7y7c8hzu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
