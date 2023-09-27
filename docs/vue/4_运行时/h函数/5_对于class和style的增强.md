# 对于 class 和 style 的增强

对于 `class` 的增强，其实是额外对 `class` 做了单独的处理。

整体的处理方式：

1. 针对数组：迭代循环
2. 针对对象：根据 `value[name]` 是 true 还是 false，拼接 `name`

## 代码

```html
<script>
  const { h, render } = Vue;

  const vnode = h(
    "div",
    {
      class: {
        red: true,
      },
    },
    "增强的 class"
  );

  render(vnode, document.querySelector("#app"));
</script>
```
