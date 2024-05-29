<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 可以透過 和useRoute()來useRouter()存取路由器實例和目前路由

const router = useRouter() // 存取路由器實例
const route = useRoute() // 存取目前的路由

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>
<template>
  <div class="about">
    <hr />
    <h2>AboutView</h2>
    <!-- v-model.trim->預設自動移除使用者輸入內容中兩端的空格 -->
    <label> Search: <input v-model.trim="search" maxlength="20" /> </label>
    <p><span style="color: cornflowerblue"></span>小筆記: @ ，通常指向src，絕對路徑</p>
    <p>小筆記: .，指向當前目錄，相對路徑</p>
    <p>小筆記: $route.fullPath 取目前的路由物件</p>
  </div>
</template>

<style></style>
