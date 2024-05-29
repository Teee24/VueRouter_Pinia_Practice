<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

const userData = ref(null)

// 離開守衛
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
  console.log(to['fullPath'])
  console.log(from['fullPath'])

  // 取消導航並停留在同一頁面上
  if (!answer) return false
})

// 更新守衛
onBeforeRouteUpdate(async (to, from) => {
  console.log('BeforeRouteUpdate')
  // 僅當 id 發生變化時才獲取用戶資料，例如僅 query 或 hash 值已變化
  if (to.params.id !== from.params.id) {
    // 模擬異步獲取用戶資料
    userData.value = await fetchUser(to.params.id)
  }
})

// 模擬異步獲取用戶資料的函數
async function fetchUser(id) {
  // 假設這是一個 API 請求，返回用戶資料
  return { id, name: 'John Doe', email: 'john@example.com' }
}
</script>
<template>
  <div>
    <h1>User Profile</h1>
    <p>Hello, {{ userData }}</p>
    <router-link to="/demo/07/23">go to somewhere</router-link>
  </div>
</template>
<style></style>
