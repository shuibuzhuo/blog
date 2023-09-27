# ELEMENT + TEXT_CHILDREN

1. 触发 `patch` 方法
2. 根据 `shapeFlag` 的值，判定触发 `processElement` 方法
3. 在 `processElement` 中，根据 **是否存在 `旧VNode`** 来判定触发 **挂载** 还是 **更新** 的操作
   - 挂载中分成了 4 大步：
     1. 生成 `div`
     2. 处理 `textContent`
     3. 处理 `props`
     4. 挂载 `dom`
4. 通过 `container._vnode = vnode` 赋值 **旧 vnode**，这里的 `container` 即 `div#app`

## 代码

```html
<script>
  const { h } = Vue;

  const vnode = h(
    "div",
    {
      class: "test",
    },
    "hello render"
  );

  render(vnode, document.querySelector("#app"));
</script>
```
