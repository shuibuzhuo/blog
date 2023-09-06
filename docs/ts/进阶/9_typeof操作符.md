# typeof 操作符

typeof 操作符用于获取给定表达式的类型信息。它返回一个字符串，表示表达式的类型。

typeof 操作符可以用于变量、函数、类、接口或任何其他表达式。

## 帮助获取一个对象的类型

通过获取对象的类型，给所有这种类型的对象加上这个类型的定义，方便后续扩展和维护

```ts
// 最开始，需求需要 2d 坐标
const center1 = {
  x: 0,
  y: 0,
};

const unit1 = {
  x: center1.x + 1,
  y: center1.y + 1,
};

// 如果有一天需求变了，需要 3d 坐标
const center2 = {
  x: 0,
  y: 0,
  z: 0, // 当我们在 center2 加上 z 属性的时候，需要在其他地方也同步加上，但如果地方太多，可能会漏掉
};

const unit2 = {
  x: center2.x + 1,
  y: center2.y + 1,
};

// 所以我们可以定义一个 type Point
const center3 = {
  x: 0,
  y: 0,
  z: 0, // 当我们在 center2 加上 z 属性的时候，需要在其他地方也同步加上，但如果地方太多，可能会漏掉
};

type Point1 = {
  x: number;
  y: number;
  z: number;
};

// 可以使用 typeof 提取 center3 对象的类型
type Point2 = typeof center3;

// 报错，Property 'z' is missing in type '{ x: number; y: number; }' but required in type 'Point'.ts(2741)
const unit3: Point1 = {
  x: center3.x + 1,
  y: center3.y + 1,
};

// 同样报错，Property 'z' is missing in type '{ x: number; y: number; }' but required in type 'Point'.ts(2741)
const unit4: Point2 = {
  x: center3.x + 1,
  y: center3.y + 1,
};

// 或者不定义 type Point，直接给 unit typeof 后的类型
// 同样报错，Property 'z' is missing in type '{ x: number; y: number; }' but required in type 'Point'.ts(2741)
const unit5: typeof center3 = {
  x: center3.x + 1,
  y: center3.y + 1,
};
```

## 定义 json 对象

```ts
// 后端接口返回的 json 数据
const personResponse = {
  name: "shuibuzhuo",
  firstName: "shui",
  lastName: "buzhuo",
};

type PersonResponse = typeof personResponse;

function process(person: PersonResponse) {
  console.log("全名：", person.firstName, person.lastName);
}
```
