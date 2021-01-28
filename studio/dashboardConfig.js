export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60134d1f7d526718c605fc11',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-523bjchn',
                  apiId: '7df11a21-d75c-4595-b145-c5920722269a'
                },
                {
                  buildHookId: '60134d1f51f4171878b91960',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dbhiz3cq',
                  apiId: '642d528a-1c52-46da-ba12-a58bba66113e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aertmann/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dbhiz3cq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
