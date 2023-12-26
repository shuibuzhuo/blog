大家好，我是哈默。今天我们来自己写一个简单的 webpack plugin。

## 什么时候需要使用 plugin

当我们想要在 webpack 构建的整个生命周期的某一个生命周期钩子中，想要去实现某种功能的时候，就可以使用 plugin。

就像我们在 Vue 中的生命周期 created，mounted 里实现某些功能一样。

## webpack 内置的 plugin

webpack 默认就提供了很多 plugin 供我们使用，比如 BannerPlugin，它是用来在我们构建出来的 js 文件的开头添加注释的。

webpack.config.js 中：

```js
plugins: [
  new webpack.BannerPlugin({
    banner: "BannerPlugin 测试",
  }),
];
```

打包后的 bundle.js 中：

![](./BannerPlugin.png)

我们看下 BannerPlugin 的内部实现：
