# 接口 interface

## 定义函数

- 定义一个函数，作用是打印坐标点，功能是可以正常执行，没有问题的

```js
const drawPoint1 = (x, y) => {
  console.log({ x, y });
};
drawPoint1(100, 200);
```

## 重构参数

- 但是坐标点的 x, y，应该是作为一个整体传入，而不是分开传入

```js
const drawPoint2 = (point) => {
  console.log({ x: point.x, y: point.y });
};
drawPoint2({ x: 100, y: 200 });

// 但现在参数可以任意传
drawPoint2({ x: "shuibuzhuo", y: "hahaha" });
drawPoint2({ weather: "sunny", hobby: "basketball" });
```

## 定义接口

- 所以我们需要定义一个接口来定义我们参数的类型，不符合参数类型的参数就会报错了

```js
interface Point {
  x: number
  y: number
}
const drawPoint3 = (point: Point) => {
  console.log({ x: point.x, y: point.y })
}
drawPoint3({ x: 100, y: 200 })
drawPoint3({ x: 'shuibuzhuo', y: 'hahaha' }) // 报错，Type 'string' is not assignable to type 'number'.ts(2322)
drawPoint3({ weather: 'sunny', hobby: 'basketball' }) // 报错，Argument of type '{ weather: string; hobby: string; }' is not assignable to parameter of type 'Point'.
// Object literal may only specify known properties, and 'weather' does not exist in type 'Point'.ts(2345)

```

## 需要一个集合，来保存跟 Point 相关的属性和方法

```js
// 引入了接口概念以后，又有了一个对象的聚合问题，我们的代码要高内聚，低耦合
// 高内聚：相关联的属性，功能要放在同一个模块里
// 低耦合：模块与模块之间的依赖关系要尽可能地弱化

// 假设我们定义了一个绘制点坐标的函数 drawPoint4
const drawPoint4 = (point: Point) => {
  console.log({ x: point.x, y: point.y });
};

// 又定义了一个获取两个点之间举例的函数 getDistances
const getDistances = (a: Point, b: Point) => {
  // ...
};

// 但是我们可能把这两个方法写在不同的地方，不同的文件，这样就造成相关联的属性和功能分散的很开，不方便维护，所以我们需要把这些相关联的属性和功能放在一个集合中，这个集合就是类
```
