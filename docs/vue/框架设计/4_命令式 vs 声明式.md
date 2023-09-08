# 命令式 vs 声明式

从两个角度进行对比

- 1. 性能
- 2. 可维护性

## 性能

举个例子

> 为指定 div 设置文本为 “hello world”

- 使用命令式

```js
div.innerText = "hello world"; // 耗时为：1
```

- 使用声明式

```js
<div>{{ msg }}</div>  <!-- 耗时为：1 + n -->
<!-- 将 msg 修改为 hello world -->
```

- 总结：命令式的性能 > 声明式的性能

## 可维护性

指的是代码是否可以方便地阅读、修改、删除、增加。<br>
即，代码逻辑是否简单。

- 命令式

```js
// 命令式
// 1. 获取到第一层的 div
const divEle = document.querySelector("#app");
// 2. 获取到它的子 div
const subDivEle = divEle.querySelector("div");
// 3. 获取第三层的 p
const subPEle = subDivEle.querySelector("p");
// 4. 定义变量 msg
const msg = "hello world";
// 5. 为该 p 元素设置 innerHTML 为 hello world
subPEle.innerHTML = msg;
```

- 声明式

```js
// 声明式
<div id="app">
  <div>
    <p>{{ msg }}</p>
  </div>
</div>
```

- 总结：命令式的可维护性 > 声明式的可维护性

## 总结

- 各有优劣
- 命令式的性能 > 声明式的性能
- 命令式的可维护性 > 声明式的可维护性
