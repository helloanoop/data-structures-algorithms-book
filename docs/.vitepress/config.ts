import { defineConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Data Structures and Algorithms',
  themeConfig: {
    logo: '/book.svg',
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/helloanoop/data-structures-algorithms-book' }
    ],
    editLink: {
      pattern: 'https://github.com/helloanoop/data-structures-algorithms-book/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
  }
});

function sidebar() {
  return [
    {
      text: 'Sorting',
      collapsible: true,
      items: [
        { text: 'Problems', link: '/sorting/problems'}
      ]
    },
    {
      text: 'Hashtable',
      collapsible: true,
      items: [
        { text: 'Problems', link: '/hashtable/problems'}
      ]
    },
    {
      text: 'Linked List',
      collapsible: true,
      items: [
        { text: 'Problems', link: '/linked-list/problems'}
      ]
    },
    {
      text: 'Trees',
      collapsible: true,
      items: [
        {
          text: 'Binary Tree',
          items: [
            { text: 'Introduction', link: '/trees/binary-tree/introduction'},
            { text: 'Problems', link: '/trees/binary-tree/problems'}
          ]
        },
        {
          text: 'Binary Search Tree',
          items: [
            {text: 'Introduction', link: '/trees/binary-search-tree/introduction'},
            {text: 'Problems', link: '/trees/binary-search-tree/problems'}
          ]
        }
      ]
    }, {
      text: 'Misc',
      collapsible: true,
      items: [
        { text: 'All Problems', link: '/misc/all-problems'},
      ]
    }
  ];
}
