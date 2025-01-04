import { createApp } from 'vue'
import App from './App.vue'

// 导入所有的全局组件
import * as GlobalComponents from './components/index'

const app = createApp(App);

// 批量注册全局组件
for (const [key, value] of Object.entries(GlobalComponents)) {
  app.component(key, value);
}

app.mount('#app')
