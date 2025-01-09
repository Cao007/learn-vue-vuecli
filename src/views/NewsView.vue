<template>
  <div>
    <h2>新闻列表</h2>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <RouterLink :to="{
          name: 'newsItem',
          query: {
            id: item.id,
            title: item.title,
            content: item.content
          }
        }">{{ item.title }}</RouterLink>
      </li>
    </ul>
    <div class="news-contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const newsList = ref([
  { id: 1, title: '新闻1的标题', content: '新闻1的内容' },
  { id: 2, title: '新闻2的标题', content: '新闻2的内容' },
  { id: 3, title: '新闻3的标题', content: '新闻3的内容' }
]);

</script>

<style scoped>
</style>