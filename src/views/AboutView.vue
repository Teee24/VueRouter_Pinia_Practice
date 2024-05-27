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
    <h1>This is an about page</h1>
    <strong>($route.fullPath取目前的路由物件)Current route path:</strong> {{ $route.fullPath }}
    <hr />
    <h3><strong>順序: App.vue -> router/index.js -> main.js</strong></h3>
    <h4>RouterView和RouterLink</h4>
    <ul>
      <li>
        RouterLink來建立連結。這使得Vue Router 能夠在不重新載入頁面的情況下改變URL，處理URL
        的產生、編碼和其他功能
      </li>
      <li>
        RouterView元件可以使Vue Router 知道你想要在哪裡渲染目前URL 路徑對應的路由元件。
        不一定要在App.vue中，但它需要在某處被導入，否則Vue Router 就不會渲染任何東西
      </li>
      <li>RouterLink和RouterView元件可以<span style="color: crimson">使Vue都是全域註冊</span></li>
      <li>不需要在元件模板中匯入 也可局部導入，例如import { RouterLink } from 'vue-router'</li>
      <li>
        使用DOM
        內模板，那麼需要注意：元件名稱必須使用kebab-case風格且不支援自閉合標籤。因此你不能直接寫RouterView/
        ，而需要使用router-view /router-view
      </li>
    </ul>

    <hr />
    <h2>AboutView</h2>
    <!-- v-model.trim->預設自動移除使用者輸入內容中兩端的空格 -->
    <label> Search: <input v-model.trim="search" maxlength="20" /> </label>
  </div>
</template>

<style></style>
