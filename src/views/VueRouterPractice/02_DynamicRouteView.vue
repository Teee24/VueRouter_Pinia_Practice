<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
  //userId.value = route.params.id
  watchChange
})

const route = useRoute()
const userId = ref('')

// 使用 $watch 監聽 $route.params 的變化
const watchChange = watch(
  () => route.params,
  (toParams, previousParams) => {
    // 更新 userId
    userId.value = toParams.id
    // 对路由参数的变化做出响应...
    console.log('Route parameters changed:', toParams)
    console.log('Previous route parameters:', previousParams)
  }
)

// 使用 beforeRouteUpdate 导航守卫
// const beforeRouteUpdateHandler = async (to, from) => {
//   // 更新 userId
//   userId.value = to.params.id
//   // 对路由参数的变化做出响应...
//   console.log('Route parameters changed:', to.params)
//   console.log('(FROM)Route parameters changed:', from.params)
// }

// route.beforeRouteUpdate(beforeRouteUpdateHandler)
</script>
<template>
  <h1>帶參數的動態路由匹配</h1>
  <ul>
    <li>
      <router-link to="/users/eduardo/posts/1">/users/eduardo/posts/1</router-link>
    </li>
    <li>
      <router-link to="/users/tee/posts/23">/users/tee/posts/23</router-link>
    </li>
  </ul>

  <h3>響應路由參數的變化</h3>
  <div>
    <h3 style="color: blue">
      複用已經存在的元件實例，使用watch、beforeRouteUpdate 對同一個元件中參數的變化做出回應
    </h3>
    <h4>User Profile (使用watch)</h4>
    <p>[點下方link觀察變化]</p>
    <ul>
      <li><router-link to="/user/1">User 1 (john)</router-link></li>
      <li><router-link to="/user/2">User 2 (jane)</router-link></li>
    </ul>
    <p>User ID: {{ userId }}</p>
  </div>
  <h3>擷取所有路由或404 Not found 路由</h3>
  <ul>
    <li>
      <router-link to="/demo/123">去錯的路由</router-link>
    </li>
    <li>
      <router-link to="/user/tina">$route.params.afterUser</router-link>
    </li>
  </ul>

  <h3>進階匹配模式</h3>
</template>
<style></style>
