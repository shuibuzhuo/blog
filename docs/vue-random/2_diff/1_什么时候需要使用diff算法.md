大家好，我是哈默。今天我们来学习一下 `vue3` 中的 `diff算法`，首先，我们来说一下什么时候需要 `diff算法`。

## 不是所有的更新都需要用到 `diff算法`

在我们日常开发中，对于一个节点的操作主要有 3 种：挂载、更新和卸载。

在更新的时候，我们就会涉及到 `diff` 算法。

但不是所有的更新都需要用到 `diff算法`，比如：

旧节点：

```js
<div>hello</div>
```

新节点：

```js
<div>hello update</div>
```

这个时候，只是 div 的文本发生了变化，所以我们只要将 div 的文本内容进行直接更新就可以了。

```js
div.textContent = "hello update";
```

我们并不需要使用什么 diff 算法。

## 需要使用 `diff算法` 的地方

那么，什么场景下，我们需要 diff 算法呢？

**—— 当我们需要对一组节点进行更新的时候！！**

比如：

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

这个时候，我们应该如何更新我们的节点呢？

最简单的做法是：

1. 依次删除旧的 a、b、c 三个 li
2. 依次挂在新的 a、b、d 三个 li

总共 6 次操作。

但是，我们可以有更聪明的做法，那就是对于我们的可以把新、旧两组 `li` 进行遍历，然后**比较出差异**，再进行更新，比如：

```js
const oldChildren = ul1.children;
const newChildren = ul2.children;

for (let i = 0; i < oldChildren.length; i++) {
  // 调用 patch 函数依次更新子节点
  patch(oldChildren[i], newChildren[i]);
}
```

这个时候，我们只要比较 3 次，就可以完成更新，比之前的 6 次，效率提升了 1 倍！

## 总结

当我们比较 2 组子节点时，用于比较的算法就是 `diff算法`。

使用 `diff算法` 的目的，就是为了减少性能开销，提高效率！
