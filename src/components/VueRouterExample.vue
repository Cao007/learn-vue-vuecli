<template>
  <h2>路由演示</h2>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <!-- 路由链接 -->
    <RouterLink to="/" active-class="active">Home</RouterLink>
    <RouterLink :to="{ path: '/about' }" active-class="active">About</RouterLink>
    <RouterLink :to="{ name: 'news' }" active-class="active">News</RouterLink>
  </nav>
  <main>
    <!-- 路由出口 -->
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';


</script>

<style scoped>
.active {
  font-size: 40px;
  color: black;
}
</style>