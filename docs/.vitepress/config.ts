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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/shuibuzhuo-blog/'
})
