import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "shuibuzhuo的博客",
  description: "Shuibuzhuo's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        items: [
          { text: "Vue", link: "/vue/框架设计/1_前言" },
          { text: "React", link: "/react/markdown-examples3" },
          { text: "算法", link: "/algorithm/complexity/what-is-complexity" },
          { text: "TypeScript", link: "/ts/基础/1_变量声明" },
        ],
      },
    ],

    sidebar: {
      "/vue/": [
        {
          text: "框架设计",
          items: [
            { text: "前言", link: "/vue/框架设计/1_前言" },
            { text: "命令式", link: "/vue/框架设计/2_命令式" },
            { text: "声明式", link: "/vue/框架设计/3_声明式" },
            {
              text: "命令式 vs 声明式",
              link: "/vue/框架设计/4_命令式 vs 声明式",
            },
            {
              text: "企业开发与设计的原则",
              link: "/vue/框架设计/5_企业开发与设计的原则",
            },
            {
              text: "框架的设计是一个不断取舍的过程",
              link: "/vue/框架设计/6_框架的设计是一个不断取舍的过程",
            },
            {
              text: ".vue文件中的 html 是真实的 html 吗",
              link: "/vue/框架设计/7_.vue文件中的 html 是真实的 html 吗",
            },
            {
              text: "运行时",
              link: "/vue/框架设计/8_运行时",
            },
            {
              text: "编译时",
              link: "/vue/框架设计/9_编译时",
            },
            {
              text: "运行时 + 编译时",
              link: "/vue/框架设计/10_运行时 + 编译时",
            },
            {
              text: "什么是副作用",
              link: "/vue/框架设计/11_什么是副作用",
            },
            {
              text: "Vue3框架设计概述",
              link: "/vue/框架设计/12_Vue3框架设计概述",
            },
            {
              text: "良好的ts支持时如何提供的",
              link: "/vue/框架设计/13_良好的ts支持是如何提供的",
            },
            {
              text: "总结",
              link: "/vue/框架设计/14_总结",
            },
          ],
        },
        {
          text: "源码结构",
          items: [{ text: "vue源码结构", link: "/vue/源码结构/1_vue源码结构" }],
        },
        {
          text: "响应系统",
          items: [
            {
              text: "核心设计原则",
              collapsed: true,
              items: [
                {
                  text: "JS的程序性",
                  link: "/vue/响应系统/核心设计原则/1_JS的程序性",
                },
                {
                  text: "让程序变得更“聪明”",
                  link: "/vue/响应系统/核心设计原则/2_让程序变得更“聪明”",
                },
                {
                  text: "vue2的响应性核心API",
                  link: "/vue/响应系统/核心设计原则/3_vue2的响应性核心API",
                },
              ],
            },
            {
              text: "reactive模块",
              collapsed: true,
              items: [
                {
                  text: "前言",
                  link: "/vue/响应系统/reactivity模块/1_前言",
                },
                {
                  text: "reactive的响应性",
                  link: "/vue/响应系统/reactivity模块/2_reactive的响应性",
                },
                {
                  text: "什么是WeakMap",
                  link: "/vue/响应系统/reactivity模块/3_什么是WeakMap",
                },
                {
                  text: "reactive 函数的局限性",
                  link: "/vue/响应系统/reactivity模块/4_reactive 函数的局限性",
                },
              ],
            },
            {
              text: "ref模块",
              collapsed: true,
              items: [
                {
                  text: "前言",
                  link: "/vue/响应系统/ref模块/1_前言",
                },
                {
                  text: "ref对于复杂数据类型",
                  link: "/vue/响应系统/ref模块/2_ref对于复杂数据类型",
                },
                {
                  text: "ref对于简单数据类型",
                  link: "/vue/响应系统/ref模块/3_ref对于简单数据类型",
                },
              ],
            },
            {
              text: "computed模块",
              collapsed: true,
              items: [
                {
                  text: "computed的响应性",
                  link: "/vue/响应系统/computed模块/1_computed的响应性",
                },
              ],
            },
          ],
        },
        {
          text: '运行时',
          items: [
            {
              text: "核心设计原则",
              collapsed: true,
              items: [
                {
                  text: "h函数和render函数",
                  link: "/vue/运行时/核心设计原则/1_h函数和render函数",
                },
                {
                  text: "核心设计原则",
                  link: "/vue/运行时/核心设计原则/2_核心设计原则",
                }
              ]
            }
          ]
        }
      ],
      "/react/": [
        {
          text: "文章",
          items: [
            { text: "文章3", link: "/react/markdown-examples3" },
            { text: "文章4", link: "/react/markdown-examples4" },
          ],
        },
      ],
      "/algorithm": [
        {
          text: "【基础】复杂度",
          collapsed: true,
          items: [
            {
              text: "什么是复杂度",
              link: "/algorithm/complexity/what-is-complexity",
            },
            {
              text: "时间复杂度",
              link: "/algorithm/complexity/time-complexity",
            },
            {
              text: "空间复杂度",
              link: "/algorithm/complexity/space-complexity",
            },
            { text: "总结", link: "/algorithm/complexity/summary" },
          ],
        },
        {
          text: "【题目】把一个数组旋转 k 步",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/1_把一个数组旋转 k 步/1_解题",
            },
          ],
        },
        {
          text: "【题目】判断一个字符串是否括号匹配",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/2_判断一个字符串是否括号匹配/1_解题",
            },
          ],
        },
        {
          text: "【题目】用两个栈实现一个队列",
          collapsed: true,
          items: [
            {
              text: "【数据结构】队列",
              link: "/algorithm/problems/3_用两个栈实现一个队列/1_【数据结构】队列",
            },
            {
              text: "解题",
              link: "/algorithm/problems/3_用两个栈实现一个队列/2_解题",
            },
          ],
        },
        {
          text: "【题目】反转单向链表",
          collapsed: true,
          items: [
            {
              text: "【数据结构】链表",
              link: "/algorithm/problems/4_反转单向链表/1_【数据结构】链表",
            },
            { text: "解题", link: "/algorithm/problems/4_反转单向链表/2_解题" },
            {
              text: "【扩展】链表和数组，哪个实现队列更快",
              link: "/algorithm/problems/4_反转单向链表/3_【扩展】链表和数组，哪个实现队列更快",
            },
          ],
        },
        {
          text: "【题目】二分查找",
          collapsed: true,
          items: [
            {
              text: "【概念】二分查找",
              link: "/algorithm/problems/5_二分查找/1_【概念】二分查找",
            },
            { text: "解题", link: "/algorithm/problems/5_二分查找/2_解题" },
          ],
        },
        {
          text: "【题目】两数之和",
          collapsed: true,
          items: [
            { text: "解题", link: "/algorithm/problems/6_两数之和/1_解题" },
          ],
        },
        {
          text: "【题目】求二叉搜索树的第 K 小的值",
          collapsed: true,
          items: [
            { text: "概念", link: "/algorithm/problems/7_二叉搜索树/1_概念" },
            { text: "解题", link: "/algorithm/problems/7_二叉搜索树/2_解题" },
          ],
        },
        {
          text: "【题目】为何二叉树重要，而不是三叉树、四叉树",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/8_为何二叉树重要/1_解题",
            },
            {
              text: "堆和二叉树",
              link: "/algorithm/problems/8_为何二叉树重要/2_堆和二叉树",
            },
          ],
        },
        {
          text: "【题目】斐波那契数列",
          collapsed: true,
          items: [
            { text: "概念", link: "/algorithm/problems/9_斐波那契数列/1_概念" },
            { text: "解题", link: "/algorithm/problems/9_斐波那契数列/2_解题" },
          ],
        },
        {
          text: "【题目】移动 0 到末尾",
          collapsed: true,
          items: [
            { text: "解题", link: "/algorithm/problems/10_移动0/1_解题" },
          ],
        },
        {
          text: "【题目】连续最多的字符",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/11_连续最多的字符/1_解题",
            },
          ],
        },
        {
          text: "【题目】快速排序",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/12_快速排序/1_解题",
            },
          ],
        },
        {
          text: "【题目】回文数字",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/13_回文数字/1_解题",
            },
          ],
        },
        {
          text: "【题目】字符串前缀匹配",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/14_字符串前缀匹配/1_解题",
            },
          ],
        },
        {
          text: "【题目】数字千分位",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/15_数字千分位/1_解题",
            },
          ],
        },
        {
          text: "【题目】切换字母大小写",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/16_切换字母大小写/1_解题",
            },
          ],
        },
        {
          text: "【题目】小数相加",
          collapsed: true,
          items: [
            {
              text: "解题",
              link: "/algorithm/problems/17_小数相加/1_解题",
            },
          ],
        },
        {
          text: "最后",
          collapsed: true,
          items: [
            {
              text: "总结",
              link: "/algorithm/problems/18_最后/1_总结",
            },
            {
              text: "常见的数据结构",
              link: "/algorithm/problems/18_最后/2_常见的数据结构",
            },
            {
              text: "常见的时间复杂度",
              link: "/algorithm/problems/18_最后/3_常见的时间复杂度",
            },
          ],
        },
      ],
      "/ts": [
        {
          text: "TS基础",
          collapsed: true,
          items: [
            { text: "变量声明", link: "/ts/基础/1_变量声明" },
            { text: "类型简介", link: "/ts/基础/2_类型简介" },
            { text: "数字类型", link: "/ts/基础/3_数字类型" },
            { text: "字符串类型", link: "/ts/基础/4_字符串类型" },
            { text: "布尔类型", link: "/ts/基础/5_布尔类型" },
            { text: "数组类型", link: "/ts/基础/6_数组类型" },
            { text: "元组类型", link: "/ts/基础/7_元组类型" },
            { text: "元组类型", link: "/ts/基础/7_元组类型" },
            { text: "联合类型", link: "/ts/基础/8_联合类型" },
            { text: "枚举", link: "/ts/基础/9_枚举" },
            { text: "any和unknown", link: "/ts/基础/10_any和unknown" },
            {
              text: "void、undefined和never",
              link: "/ts/基础/11_void、undefined和never",
            },
            {
              text: "类型断言",
              link: "/ts/基础/12_类型断言",
            },
            {
              text: "函数类型",
              link: "/ts/基础/13_函数类型",
            },
          ],
        },
        {
          text: "面向对象",
          collapsed: true,
          items: [
            {
              text: "对象类型",
              link: "/ts/面向对象/1_对象类型",
            },
            {
              text: "接口 interface",
              link: "/ts/面向对象/2_接口 interface",
            },
            {
              text: "类",
              link: "/ts/面向对象/3_类",
            },
            {
              text: "访问修饰符",
              link: "/ts/面向对象/4_访问修饰符",
            },
            {
              text: "模块",
              link: "/ts/面向对象/5_模块",
            },
            {
              text: "泛型",
              link: "/ts/面向对象/6_泛型",
            },
          ],
        },
        {
          text: "进阶",
          collapsed: true,
          items: [
            {
              text: "类型守护",
              link: "/ts/进阶/1_类型守护",
            },
            {
              text: "函数重载",
              link: "/ts/进阶/2_函数重载",
            },
            {
              text: "调用签名",
              link: "/ts/进阶/3_调用签名",
            },
            {
              text: "索引签名",
              link: "/ts/进阶/4_索引签名",
            },
            {
              text: "readonly",
              link: "/ts/进阶/5_readonly",
            },
            {
              text: "双重断言",
              link: "/ts/进阶/6_双重断言",
            },
            {
              text: "常量断言",
              link: "/ts/进阶/7_常量断言",
            },
            {
              text: "this",
              link: "/ts/进阶/8_this",
            },
            {
              text: "typeof操作符",
              link: "/ts/进阶/9_typeof操作符",
            },
            {
              text: "keyof操作符",
              link: "/ts/进阶/10_keyof操作符",
            },
            {
              text: "类型查找",
              link: "/ts/进阶/11_类型查找",
            },
            {
              text: "类型映射",
              link: "/ts/进阶/12_类型映射",
            },
            {
              text: "映射修饰符",
              link: "/ts/进阶/13_映射修饰符",
            },
          ],
        },
      ],
    },
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/shuibuzhuo-blog/",
});
