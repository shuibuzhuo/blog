# 源码结构

`vue` 源代码（版本： `V 3.2.37`）

```js
vue-next-3.2.37-master
├── tsconfig.json // TypeScript 配置文件
├── rollup.config.js // rollup 的配置文件
├── packages // 核心代码区
│   ├── vue-compat // 用于兼容 vue2 的代码
│   ├── vue // 重要：测试实例、打包之后的 dist 都会放在这里
│   ├── template-explorer // 提供了一个线上的测试（https://template-explorer.vuejs.org），用于把 tempalte 转化为 render
│   ├── size-check // 测试运行时包大小
│   ├── shared // 重要：共享的工具类
│   ├── sfc-playground // sfc 工具，比如：https://sfc.vuejs.org/
│   ├── server-renderer // 服务器渲染
│   ├── runtime-test // runtime 测试相关
│   ├── runtime-dom // 重要：基于浏览器平台的运行时
│   ├── runtime-core // 重要：运行时的核心代码，内部针对不同平台进行了实现
│   ├── reactivity-transform // 已过期，无需关注
│   ├── reactivity // 重要：响应性的核心模块
│   ├── global.d.ts // 全局的 ts 声明
│   ├── compiler-ssr // 服务端渲染的编译模块
│   ├── compiler-sfc // 单文件组件（.vue）的编译模块
│   ├── compiler-dom // 重要：浏览器相关的编译模块
│   └── compiler-core // 重要：编译器核心代码
├── package.json // npm 包管理工具
├── netlify.toml // 自动化部署相关
├── jest.config.js // 测试相关
├── api-extractor.json // TypeScript 的 API 分析工具
├── SECURITY.md // 报告漏洞，维护安全的声明文件
├── README.md // 项目声明文件
├── LICENSE // 开源协议
├── CHANGELOG.md // 更新日志
├── BACKERS.md // 赞助声明
├── test-dts // 测试相关，不需要关注
├── scripts // 配置文件相关，不需要关注
├── pnpm-workspace.yaml // pnpm 相关配置
└── pnpm-lock.yaml // 使用 pnpm 下载的依赖包版本
```
