<template>
  <div>
    <h1>自动销毁 effect</h1>
    <div>num: {{ num }}</div>
    <button @click="addNum">增加num</button>
    <button @click="destroy">销毁 effect</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const num = ref(10);
function addNum() {
  num.value++;
}

// 销毁 effect
function destroy() {
  stop();
}

const stop = watchEffect(() => {
  console.log("num is: ", num.value);
});
</script>
