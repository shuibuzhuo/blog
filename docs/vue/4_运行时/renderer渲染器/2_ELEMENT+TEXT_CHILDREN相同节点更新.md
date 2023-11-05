# ELEMENT+TEXT_CHILDREN 相同节点更新

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
      "div",
      {
        class: "active",
      },
      "update"
    );
    render(vnode2, document.querySelector("#app"));
  }, 2000);
</script>
```

## 更新操作

生成一个新的虚拟 `DOM` 树，运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 `DOM` 上去。

## 总结

1. 无论是 **挂载** 还是 **更新**，都会触发 `processElement` 方法，根据 `oldVNode` 是否存在，决定是 `mountElement` 还是 `patchElement`
2. `Element` 的更新操作，有可能 **会在同一个 `el` 中完成**（仅限元素没有发生变化时，如果新旧元素不同，那么是另外的情况）
3. 更新操作分为：
   1. `children` 更新
   2. `props` 更新
