<template>
  <div>
    <h1>自动收集依赖并且触发</h1>
    <div>num: {{ num }}</div>
    <button @click="addNum">增加num</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const num = ref(10);
function addNum() {
  num.value++;
}
watchEffect(() => {
  console.log("num is: ", num.value);
});
</script>
