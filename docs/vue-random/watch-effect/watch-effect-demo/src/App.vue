<script setup lang="ts">
// import demo1 from "./components/demo1.vue";
// import demo2 from "./components/demo2.vue";
import demo3 from "./components/demo3.vue";
// import demo4 from "./components/demo4.vue";
</script>

<template>
  <div>
    <!-- 自动收集依赖并且触发 -->
    <!-- <demo1></demo1> -->
    <!-- 自动销毁 effect -->
    <!-- <demo2></demo2> -->
    <!-- 使副作用执行失效 -->
    <demo3></demo3>
    <!-- 副作用执行顺序 -->
    <demo4></demo4>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
