<template>
  <div>
    <h1>副作用执行顺序</h1>
    <div ref="node">{{ greeting }}</div>
    <button @click="append">增加</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const greeting = ref("hi");
const count = ref(0);
function append() {
  greeting.value += "hi";
  count.value++;
}
const node = ref<HTMLElement | null>(null);
watchEffect(
  () => {
    console.log("effect run");
    console.log("count", count.value);

    const currentText = node.value ? node.value.innerText : "";
    console.log("currentText", currentText);
  },
  {
    flush: "post",
  }
);
</script>
