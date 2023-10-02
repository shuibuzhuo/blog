# Object.defineProperty 在设计层的缺陷

`vue2` 使用 `Object.defineProperty` 作为响应性的核心 `API`，但是在 `vue3` 的时候却放弃了这种方式，转而使用 `Proxy`，为什么呢？

因为 **Object.defineProperty** 存在一个致命的缺陷：

在 vue2 官网中有这样一段描述

> 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

这里 **由于 JavaScript 的限制** 是什么意思呢？

下面来看两个例子

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="(val, key, index) in person" :key="index">
        {{ val }} ----- {{ key }}
      </li>
    </ul>
    <button @click="addObjKey">为对象增加属性</button>
    <p>-----------------</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addArrItem">为数组增加元素</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      person: {
        name: "shuibuzhuo",
        age: 20,
      },
      arr: ["张三", "李四"],
    };
  },
  methods: {
    addObjKey() {
      this.person.gender = "男";
      console.log(this.person);
    },
    addArrItem() {
      this.arr[2] = "王五";
      console.log("this.arr", this.arr);
    },
  },
};
</script>
```

这个例子，就体现了 `vue2` 中响应性的限制

1. 当为 **对象** 新增一个属性时，新增的属性 **不是响应性** 的
2. 当为 **数组** 通过下标新增一个元素时，新增的元素 **不是响应性** 的

造成这个问题的原因是：

1. `vue2` 是以 `Object.defineProperty` 作为核心 `API` 实现响应性的
2. `Object.defineProperty` 只可以监听 **指定对象的指定属性的 getter 和 setter**
3. 被监听了 `getter` 和 `setter` 的属性，就被叫做 **该属性具备了响应性**。

那就意味着：我们 **必须要知道指定对象中存在该属性**，才可以为该属性指定响应性。

但是 **由于 JavaScript 的限制**，我们没有办法监听到 **指定对象新增了一个属性**，所以新增的属性就没有办法通过 `Object.defineProperty` 来监听 `getter` 和 `setter`，所以 **新增的属性将失去响应性**

> 如果想要增加的属性具备响应性，那么可以通过 Vue.set 方法来实现

那么，这个就是 `vue2` 中 `Object.defineProperty` 的“缺陷”，那么 `vue3` 是如何解决这些缺陷的呢？
