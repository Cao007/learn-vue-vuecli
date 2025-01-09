import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NewsView from '@/views/NewsView.vue'
import NewsItem from '@/views/NewsItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    children: [
      {
        path: 'newItem',
        name: 'newsItem',
        component: NewsItem,
        // 1.接受params参数
        // props: true 
        // 2.props函数，接受params参数或query参数
        props(route: any) {
          return route.query;
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;