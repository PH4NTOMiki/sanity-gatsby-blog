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
                  buildHookId: '5fac40fc95d1295faaa60c7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kg4eua83',
                  apiId: '2329af72-1d91-447a-8a79-a93ff3728267'
                },
                {
                  buildHookId: '5fac40fc4e09385aba4ff73f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ds4edepp',
                  apiId: '5ea687a8-4562-471f-b3fd-9df9f9f5a0bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PH4NTOMiki/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ds4edepp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
