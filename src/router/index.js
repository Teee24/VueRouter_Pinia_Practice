import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

// 入門
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

// 路徑參數
import UserPost from '@/views/UserExample/UserPost.vue'

import Demo from '@/components/DemoDisplay.vue'
import StartedView from '@/views/VueRouterPractice/01_StartedView.vue'
import DynamicRouteView from '@/views/VueRouterPractice/02_DynamicRouteView.vue'
import RoutesMatching from '@/views/VueRouterPractice/03_RoutesMatching.vue'
import UserGeneric from '@/components/UserGeneric.vue'
import NestedRoutes from '@/views/VueRouterPractice/04_NestedRoutes.vue'

import UserProfile from '@/views/UserExample/UserProfile.vue'
import User from '@/views/UserExample/User.vue'
import UserHome from '@/views/UserExample/UserHome.vue'
import ProgrammaticNavigation from '@/views/VueRouterPractice/05_ProgrammaticNavigation.vue'
import First from '@/views/NamedViewExample/First.vue'
import Second from '@/views/NamedViewExample/Second.vue'
import Third from '@/views/NamedViewExample/Third.vue'
import NamedViews from '@/views/VueRouterPractice/06_NamedViews.vue'
import UserSetting from '@/views/UsersettingExample/UserSetting.vue'
import UserEmailsSubscriptions from '@/views/UsersettingExample/UserEmailsSubscriptions.vue'
import UserProfiles from '@/views/UsersettingExample/UserProfiles.vue'
import UserProfilePreview from '@/views/UsersettingExample/UserProfilePreview.vue'
// import CompositionApi from '/src/views/CompositionAPI.vue'

// 不同的歷史模式
// hash 模式->createWebHashHistory()
// Memory 模式->createMemoryHistory()
// HTML5 模式 -> createWebHistory()

// 定義路由，把URL 路徑對應到元件
// 路由配置中每個路由對應的元件會被渲染到 <RouterView> 中，這樣就實現了根據URL路徑動態渲染不同的頁面內容

// 建立路由器實例 -> 呼叫 createRouter()
const router = createRouter({
  // 控制了路由和URL 路徑是如何雙向映射
  // createMemoryHistory->會完全忽略瀏覽器的URL 而使用自己內部的URL
  // 通常使用createWebHistory()或createWebHashHistory()
  // history: createMemoryHistory(),

  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, alias: '/home' },
    { path: '/about', component: AboutView },
    { path: '/users/:username/posts/:postId', component: UserPost },
    { path: '/user/:afterUser(.*)', component: UserGeneric },
    { path: '/user/:id', component: DynamicRouteView },
    {
      path: '/users/:username',
      component: User,
      children: [
        { path: '', name: 'user', component: UserHome },

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
          path: '07/:id',
          component: () => import('@/views/VueRouterPractice/CompositionAPI.vue')
        },
        {
          path: '06',
          component: NamedViews,
          children: [
            {
              path: 'nameviews01',
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
      name: 'set',
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
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } ->改成動態導入
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue')
    }
  ]
})
export default router
