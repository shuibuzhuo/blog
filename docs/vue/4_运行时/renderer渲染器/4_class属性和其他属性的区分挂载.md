# class 属性和其他属性的区分挂载

`vue` 通过 **三种不同的方式** 来设置了 3 个属性

1. `class` 属性：通过 `el.className` 来设置
2. `textarea 的 type` 属性：通过 `el.setAttribute` 来设置
3. `textarea 的 value` 属性：通过 `el[key] = value` 来设置

## 为什么要分不同的形式？

当我们为 `DOM` 设置对应的属性的时候，分为了 2 种情况：

1. `HTML Attributes`
2. `DOM Properties`

## HTML Attributes

定义在 `HTML标签` 上的属性，如：

```js
<textarea class="test-class" type="text"></textarea>
```

`class="test-class"` 和 `type="text"` 就是 `HTML Attributes`

## DOM Properties

DOM 对象上的属性

```js
const el = document.querySelector("textarea");
```

我们可以通过 `.` 的形式来获取对应的属性：

```js
el.type; // 'textarea'
el.className; // 'test-class'
el.value; // 'textarea value'
```

## 不同之处

针对不同属性，需要通过不同方式来指定属性：

1. 针对于 class 获取：
   a. HTML Attributes：ta.getAttribute('class')
   b. DOM Properties：ta.className
2. 针对于 textarea 的 type 获取：
   a. HTML Attributes：ta.getAttribute('type')
   b. DOM Properties：ta.type 无法获取
3. 针对于 taxtarea 的 value 获取：
   a. HTML Attributes：ta.getAttribute('value') 无法获取
   b. DOM Properties：ta.value

所以 `vue` 要通过一系列的判断，最终决定用什么方式来进行处理

其中，针对 `class` 而言，使用 `className` 要比 `setAttribute` 性能要高
