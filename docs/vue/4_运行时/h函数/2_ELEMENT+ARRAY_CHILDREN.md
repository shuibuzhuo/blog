# # h 函数 ELEMENT + ARRAY_CHILDREN

1. 整体的逻辑和 `ELEMENT + TEXT_CHILDREN` 相比，并没有变复杂
2. 第一次计算 `shapeFlag`，依然为 `Element`
3. 第二次计算 `shapeFlag`，因为 `children` 为 `Array`，所以会进入 `else if (isArray(children))` 判断，计算的 `type` 为 `ARRAY_CHILDREN`

## 代码

```html
<script>
  const { h } = Vue;

  const vnode = h(
    "div",
    {
      class: "test",
    },
    [h("p", "p1"), h("p", "p2"), h("p", "p3")]
  );

  console.log(vnode);
</script>
```
