<template>
  <div>
    <h1>使副作用执行失效</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import axios from "axios";

const count = ref(1);
function addCount() {
  count.value++;
}
watchEffect((onInvalidate) => {
  console.log("effect run");

  const source = axios.CancelToken.source();
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${count.value}`, {
      cancelToken: source.token,
    })
    .catch((err: Error) => {
      console.log("catch err", err.message);
    });
  onInvalidate(() => {
    source.cancel("trigger");
  });
});
</script>
