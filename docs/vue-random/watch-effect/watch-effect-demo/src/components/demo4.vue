<template>
  <div>
    <h1>副作用执行顺序</h1>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";

watchEffect(() => {
  console.log("effect run");
});
</script>
