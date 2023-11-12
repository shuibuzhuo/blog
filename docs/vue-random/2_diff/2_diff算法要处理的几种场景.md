大家好，我是哈默。今天我们来继续来学习一下 `vue3` 中的 `diff算法`。上回，我们说到了[什么时候需要使用 diff 算法](./1_什么时候需要使用diff算法.md)。在明确了 `diff` 算法使用的前提之后，我们再来看下 `diff算法` 需要处理哪些场景呢？

## 两组元素个数相同的时候

首先，我们先来看下元素个数相同的时候，比如：

旧节点，`ul` 元素下是一组 `li`，总共 3 个 `li`：

```js
<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

新节点，`ul` 元素下也是一组 `li`，总共也是 3 个 `li`：

```js
<ul>
  <li>a</li>
  <li>b</li>
  <li>d</li> // 第三个 li 元素发生了变化！👾
</ul>
```

这个时候，我们只需要遍历两组子节点，然后依次更新每一个节点就可以了，代码如下：

```js
const oldChildren = ul1.children;
const newChildren = ul2.children;

for (let i = 0; i < oldChildren.length; i++) {
  // 调用 patch 函数依次更新子节点
  patch(oldChildren[i], newChildren[i]);
}
```

## 两组元素个数不同的时候

但在实际情况中，我们新的一组元素常常和旧的一组元素个数不一样。

这个时候，就会有 2 种情况：

1. 新的一组元素数量 > 旧的一组元素数量
2. 新的一组元素数量 < 旧的一组元素数量

这个时候，我们可以首先获取两组子节点公共的元素数量的长度，然后如果新的一组元素多，则挂载剩余的新元素；新的一组元素少，则卸载旧元素即可。代码如下：

```js
const oldChildren = ul1.children;
const newChildren = ul2.children;

const oldChildrenLength = oldChildren.length;
const newChildrenLength = newChildren.length;

// 获取公共的长度
const commonLength = Math.min(oldChildrenLength, newChildrenLength);

for (let i = 0; i < commonLength; i++) {
  patch(oldChildren[i], newChildren[i]);
}

// 新的一组元素多，则挂载剩余的新元素
if (newChildrenLength > oldChildrenLength) {
  for (let i = commonLength; i < newChildrenLength; i++) {
    patch(null, newChildren[i]);
  }
}
// 新的一组元素少，则卸载旧元素即可
else if (newChildrenLength < oldChildrenLength) {
  for (let i = commonLength; i < oldChildrenLength; i++) {
    unmount(oldChildren[i]);
  }
}
```

## 两组元素的顺序不同

还有一种更加复杂，但是也是很常见的情况，就是新的一组元素的顺序和旧的一组元素的顺序是不同的，比如：

旧节点：

```js
[
  { type: "p", children: "我是p1" },
  { type: "p", children: "我是p2" },
  { type: "p", children: "我是p3" },
];
```

新节点：

```js
[
  { type: "p", children: "我是p2" },
  { type: "p", children: "我是p3" },
  { type: "p", children: "我是p1" },
];
```

这个时候，最高效的更新节点的方式是：将 `我是p1` 移动到新的一组节点的末尾即可。

但是，这对于我们肉眼来说，是很简单的。但程序怎么知道谁是 `p1` 呢？

因为我们现在只用了 `type` 这个属性来区分不同的节点，这个属性的值可能是 `p、div、li...`

所以，我们需要引入一个新的属性来区分相同的 `type` 为 `p` 的节点，这个新属性就是 `key`。

旧节点：

```js
[
  { type: "p", children: "我是p1", key: 1 },
  { type: "p", children: "我是p2", key: 2 },
  { type: "p", children: "我是p3", key: 3 },
];
```

新节点：

```js
[
  { type: "p", children: "我是p2", key: 2 },
  { type: "p", children: "我是p3", key: 3 },
  { type: "p", children: "我是p1", key: 1 },
];
```

这个时候，我们就很清晰的知道：对于 `p1` 来说，它从旧节点的第一位，移动到了新节点的第三位。

## 总结

那么今天，我们一共探讨了`diff算法` 需要处理的 3 种不同的情况。

但现在，我们只是从理论的角度进行了分析，但 `vue3` 中，它具体是如何实现这个 `diff算法` 的呢？

比如，我们这里最后说的 `移动节点`，我们可以把 `p1` 移动到最后，也可以把 `p2`、`p3` 往前移动，那么 `vue3` 是如何求得最优的移动方案的呢？这个，我们就留到下一回再说。
