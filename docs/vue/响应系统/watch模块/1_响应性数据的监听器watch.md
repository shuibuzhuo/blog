# watch 响应性数据的监听器

## 代码 - 基础的 watch

```js
<script>
  const { reactive, watch } = Vue

  const obj = reactive({
    name: '张三'
  })

  watch(obj, (value, oldValue) => {
    console.log('watch 监听被触发');
    console.log('value', value);
  })

  setTimeout(() => {
    obj.name = '李四'
  }, 2000);
</script>
```

watch 函数整个逻辑主要分为了 4 大块：

1. `watch` 函数本身
2. `reactive` 的 `setter行为`
3. `flushJobs`
4. `job`
