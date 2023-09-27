# Text、Comment 和 Fragment

## Text

`Text` 的 `type` 是 `Symbol(Text)`

代码

```js
const { h, render, Text, Comment, Fragment } = Vue;
const vnodeText = h(Text, "这是一个 Text");
console.log(vnodeText);
// 可以通过 render 进行渲染
render(vnodeText, document.querySelector("#app"));
```

## Comment

`Comment` 的 `type` 是 `Symbol(Comment)`

代码

```js
const { h, render, Text, Comment, Fragment } = Vue;
const vnodeComment = h(Comment, "这是一个 Comment");
console.log(vnodeComment);
render(vnodeComment, document.querySelector("#app"));
```

## Fragment

`Fragment` 的 `type` 是 `Symbol(Fragment)`

代码

```js
const { h, render, Text, Comment, Fragment } = Vue;
const vnodeFragment = h(Fragment, "这是一个 Fragment");
console.log(vnodeFragment);
render(vnodeFragment, document.querySelector("#app"));
```
