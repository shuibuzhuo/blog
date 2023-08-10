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
          text: '【基础】复杂度',
          collapsed: true,
          items: [
            { text: '什么是复杂度', link: '/algorithm/complexity/what-is-complexity' },
            { text: '时间复杂度', link: '/algorithm/complexity/time-complexity' },
            { text: '空间复杂度', link: '/algorithm/complexity/space-complexity' },
            { text: '总结', link: '/algorithm/complexity/summary' },
          ]
        },
        {
          text: '【题目】把一个数组旋转 k 步',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/1_把一个数组旋转 k 步/1_解题' }
          ]
        },
        {
          text: '【题目】判断一个字符串是否括号匹配',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/2_判断一个字符串是否括号匹配/1_解题' },
          ]
        },
        {
          text: '【题目】用两个栈实现一个队列',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/3_用两个栈实现一个队列/1_解题' },
          ]
        },
        {
          text: '【题目】反转单向链表',
          collapsed: true,
          items: [
            { text: '链表的概念', link: '/algorithm/problems/4_反转单向链表/1_链表的概念' },
            { text: '解题', link: '/algorithm/problems/4_反转单向链表/2_解题' },
            { text: '【扩展】链表和数组，哪个实现队列更快', link: '/algorithm/problems/4_反转单向链表/3_【扩展】链表和数组，哪个实现队列更快' },
          ]
        }
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
