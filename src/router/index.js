import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

// 入門
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

// 路徑參數
import UserPost from '@/views/UserPost.vue'

import NotFound from '@/components/NotFound.vue'

import Demo from '@/components/Demo.vue'
import StartedView from '@/views/01_StartedView.vue'
import DynamicRouteView from '@/views/02_DynamicRouteView.vue'
import RoutesMatching from '@/views/03_RoutesMatching.vue'
import UserGeneric from '@/components/UserGeneric.vue'
import NestedRoutes from '@/views/04_NestedRoutes.vue'

import UserProfile from '@/views/UserProfile.vue'
import User from '@/views/User.vue'
import UserHome from '@/views/UserHome.vue'
import ProgrammaticNavigation from '@/views/05_ProgrammaticNavigation.vue'
import First from '@/views/First.vue'
import Second from '@/views/Second.vue'
import Third from '@/views/Third.vue'
import NamedViews from '@/views/06_NamedViews.vue'
import UserSetting from '@/views/UserSetting.vue'
import UserEmailsSubscriptions from '@/views/UserEmailsSubscriptions.vue'
import UserProfiles from '@/views/UserProfiles.vue'
import UserProfilePreview from '@/views/UserProfilePreview.vue'

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

// 不同的歷史模式
// hash 模式->createWebHashHistory()
// Memory 模式->createMemoryHistory()
// HTML5 模式 -> createWebHistory()

// 定義路由，把URL 路徑對應到元件
// 路由配置中每個路由對應的元件會被渲染到 <RouterView> 中，這樣就實現了根據URL路徑動態渲染不同的頁面內容
// 擷取取所有路由或404 Not found 路由
// 将匹配所有内容并將其放在 `$route.params.pathMatch` 下
// { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
// 将匹配以 `/user-` 開頭的所有内容，并將其放在 `$route.params.afterUser` 下
// { path: '/user-:afterUser(.*)', component: UserGeneric }
// 建立路由器實例 -> 呼叫 createRouter()
const router = createRouter({
  // 控制了路由和URL 路徑是如何雙向映射
  // createMemoryHistory->會完全忽略瀏覽器的URL 而使用自己內部的URL
  // 通常使用createWebHistory()或createWebHashHistory()
  // history: createMemoryHistory(),

  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/users/:username/posts/:postId', component: UserPost },
    { path: '/user/:afterUser(.*)', component: UserGeneric },
    { path: '/user/:id', component: DynamicRouteView },
    {
      path: '/users/:username',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', name: 'user', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile }
      ]
    },
    {
      path: '/demo',
      component: Demo,
      children: [
        { path: '01', component: StartedView },
        { path: '02', component: DynamicRouteView },
        { path: '03', component: RoutesMatching },
        { path: '04', component: NestedRoutes },
        { path: '05', component: ProgrammaticNavigation },
        {
          path: '06',
          component: NamedViews,
          children: [
            {
              path: 'nameviews01',
              // a single route can define multiple named components
              // which will be rendered into <router-view>s with corresponding names.
              components: {
                default: First,
                a: Second,
                b: Third
              }
            },
            {
              path: 'nameviewsother',
              components: {
                default: Third,
                a: Second,
                b: First
              }
            }
          ]
        }
      ]
    },
    {
      path: '/settings',
      // You could also have named views at tho top
      component: UserSetting,
      children: [
        {
          path: 'emails',
          component: UserEmailsSubscriptions
        },
        {
          path: 'profile',
          components: {
            default: UserProfiles,
            helper: UserProfilePreview
          }
        }
      ]
    },

    // 將匹配所有內容並將其放在 `$route.params.pathMatch` 下 -> 不是正確的路由都到這邊
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }

    // { path: '/:postId', component: RoutesMatch },
    // { path: '/', component: DynamicRouteView }
  ]
})
export default router
