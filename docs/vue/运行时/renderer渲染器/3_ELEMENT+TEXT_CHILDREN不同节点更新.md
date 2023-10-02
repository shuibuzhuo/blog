# ELEMENT+TEXT_CHILDREN 不同节点更新

## 代码

```html
<script>
  const { h, render } = Vue;

  const vnode = h(
    "div",
    {
      class: "test",
    },
    "hello render"
  );
  // 挂载
  render(vnode, document.querySelector("#app"));

  // 延迟两秒，生成新的 vnode，进行更新操作
  setTimeout(() => {
    const vnode2 = h(
      "h1",
      {
        class: "active",
      },
      "update"
    );
    render(vnode2, document.querySelector("#app"));
  }, 2000);
</script>
```

## 总结

1. 当节点元素不同时，更新操作其实是：**先删除，后挂载** 的逻辑
2. 删除元素的代码从 `unmount` 开始，最终会触发 `nodeOps` 下的 `remove` 方法，通过 `parent.removeChild(child)` 完成删除操作。
