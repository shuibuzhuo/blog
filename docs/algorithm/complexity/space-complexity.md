# 空间复杂度

## 概念
程序执行时需要的内存空间

## 常见的空间复杂度
- O(1) 有限的、可数的空间（数量级）
- O(n) 和输入的数据量相同的空间（数量级）

## 代码示例
### O(1) 有限的、可数的空间（数量级）
```javascript
function fn(arr = []) {
  const a = arr[1]
  const b = arr[2]
}
```

### O(n) 和输入的数据量相同的空间（数量级）
```javascript
function fn(arr = []) {
  const arr2 = []

  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] + 100
  }

  // ...

  return arr2
}
```

