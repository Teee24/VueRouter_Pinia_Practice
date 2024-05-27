import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// 定義路由，把URL 路徑對應到元件
// 路由配置中每個路由對應的元件會被渲染到 <RouterView> 中，這樣就實現了根據URL路徑動態渲染不同的頁面內容
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
]
// 建立路由器實例 -> 呼叫 createRouter()
const router = createRouter({
  // 控制了路由和URL 路徑是如何雙向映射
  // createMemoryHistory->會完全忽略瀏覽器的URL 而使用自己內部的URL
  // 通常使用createWebHistory()或createWebHashHistory()
  history: createMemoryHistory(),
  routes
})
export default router
