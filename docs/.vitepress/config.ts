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
            { text: '【数据结构】队列', link: '/algorithm/problems/3_用两个栈实现一个队列/1_【数据结构】队列' },
            { text: '解题', link: '/algorithm/problems/3_用两个栈实现一个队列/2_解题' },
          ]
        },
        {
          text: '【题目】反转单向链表',
          collapsed: true,
          items: [
            { text: '【数据结构】链表', link: '/algorithm/problems/4_反转单向链表/1_【数据结构】链表' },
            { text: '解题', link: '/algorithm/problems/4_反转单向链表/2_解题' },
            { text: '【扩展】链表和数组，哪个实现队列更快', link: '/algorithm/problems/4_反转单向链表/3_【扩展】链表和数组，哪个实现队列更快' },
          ]
        },
        {
          text: '【题目】二分查找',
          collapsed: true,
          items: [
            { text: '【概念】二分查找', link: '/algorithm/problems/5_二分查找/1_【概念】二分查找' },
            { text: '解题', link: '/algorithm/problems/5_二分查找/2_解题' },
          ]
        },
        {
          text: '【题目】两数之和',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/6_两数之和/1_解题' },
          ]
        },
        {
          text: '【题目】求二叉搜索树的第 K 小的值',
          collapsed: true,
          items: [
            { text: '概念', link: '/algorithm/problems/7_二叉搜索树/1_概念'},
            { text: '解题', link: '/algorithm/problems/7_二叉搜索树/2_解题'}
          ]
        },
        {
          text: '【题目】为何二叉树重要，而不是三叉树、四叉树',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/8_为何二叉树重要/1_解题' },
            { text: '堆和二叉树', link: '/algorithm/problems/8_为何二叉树重要/2_堆和二叉树' },
          ]
        },
        {
          text: '【题目】斐波那契数列',
          collapsed: true,
          items: [
            { text: '概念', link: '/algorithm/problems/9_斐波那契数列/1_概念' },
            { text: '解题', link: '/algorithm/problems/9_斐波那契数列/2_解题' },
          ]
        },
        {
          text: '【题目】移动 0 到末尾',
          collapsed: true,
          items: [
            { text: '解题', link: '/algorithm/problems/10_移动0/1_解题'}
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
