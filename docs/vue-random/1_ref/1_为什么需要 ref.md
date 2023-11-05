## reactive 的使用

我们知道，在使用 reactive 的时候，我们可以给 `reactive` 传入对象，例如：

```vue
<script setup>
import { reactive } from "vue";

const info = reactive({
  name: "hamo",
  age: 20,
});
</script>
```

## 给 reactive 传入原始类型的数据

但如果我们给 reactive 传入原始类型的数据，例如：

```vue
<script setup>
import { reactive } from "vue";

const name = reactive("hamo");
</script>
```

这个时候，就会报错：

```js
⚠️ value cannot be made reactive: hamo
```

## 报错的原因

以上报错的原因是因为，`reactive` 内部是用 `Proxy` 实现的，如下：
