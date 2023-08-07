import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shuibuzhuo's Blog",
  description: "Shuibuzhuo's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '分类', items: [
          { text: 'Vue', link: '/vue/markdown-examples'},
          { text: 'React', link: '/react/markdown-examples3'},
          { text: '算法', link: '/algorithm/complexity/what-is-complexity'}
        ] 
    }
    ],

    sidebar: {
      '/vue/': [
        {
          text: '文章',
          items: [
            { text: '文章1', link: '/vue/markdown-examples' },
            { text: '文章2', link: '/vue/markdown-examples2' },
          ]
        }
      ],
      '/react/': [
        {
          text: '文章',
          items: [
            { text: '文章3', link: '/react/markdown-examples3' },
            { text: '文章4', link: '/react/markdown-examples4' },
          ]
        }
      ],
      '/algorithm': [
        {
          text: '复杂度',
          collapsed: true,
          items: [
            { text: '什么是复杂度', link: '/algorithm/complexity/what-is-complexity' },
            { text: '时间复杂度', link: '/algorithm/complexity/time-complexity' },
            { text: '空间复杂度', link: '/algorithm/complexity/space-complexity' },
            { text: '总结', link: '/algorithm/complexity/summary' },
          ]
        },
        {
          text: '算法题1',
          collapsed: true,
          items: [
            { text: '11', link: '/algorithm/problems/1' },
            { text: '22', link: '/algorithm/problems/2' },
            { text: '33', link: '/algorithm/problems/3' },
          ]
        },
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/shuibuzhuo-blog/'
})
