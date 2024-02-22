<template>
  <div>
    <h1>使副作用执行失效</h1>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";

watchEffect(() => {
  console.log("effect run");
});
</script>
