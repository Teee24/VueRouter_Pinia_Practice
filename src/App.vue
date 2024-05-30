<script setup>
import { RouterLink, RouterView } from 'vue-router'
import demo from '@/views/DemoDisplay.vue'
</script>

<template>
  <div class="flexContainer">
    <header>Layout 嘗試中</header>
    <div class="flexContent">
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li>練習</li>
          <ul>
            <li>
              <RouterLink to="/demo/01">入門</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/02">動態路由匹配</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/03">路由的匹配語法</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/04">嵌套路由</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/05">編程式導航</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/06">命名視圖</RouterLink>
            </li>
            <li>
              <RouterLink to="/demo/07/123">組合式API</RouterLink>
            </li>
          </ul>
        </ul>
        <hr />
        <ul>
          <li><RouterLink to="/piniastart">認識Pinia</RouterLink></li>
          <li><RouterLink to="/01pinia">定義Store</RouterLink></li>
          <li><RouterLink to="/02pinia">State</RouterLink></li>
          <li><RouterLink to="/03pinia">Getter</RouterLink></li>
          <li><RouterLink to="/04pinia">Action</RouterLink></li>
        </ul>
      </nav>
      <div class="mainAsideContainer">
        <aside>
          <p>
            <strong>目前位置:</strong>
            {{ $route.fullPath }}
          </p>
        </aside>
        <main><RouterView /></main>
      </div>
    </div>
    <footer>
      <p>參考: https://router.vuejs.org/zh/</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  padding: 2px;
  margin: 2px;
  border: 2px solid rgb(130, 161, 248);
}
main {
  padding: 2px;
  margin: 2px;
  border: 2px solid rgb(119, 216, 233);
  flex: 1;
}
.flexContainer {
  width: 800px;

  padding: 2px;
  margin: 2px;
  border: 2px solid cornflowerblue;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 2px;
  margin: 2px;
  border: 2px solid lightblue;
  flex: 0 0 auto;
}
aside {
  padding: 2px;
  margin: 2px;
  border: 2px solid cornflowerblue;
}
footer {
  padding: 2px;
  margin: 2px;
  border: 2px solid rgb(118, 182, 255);
}
.flexContent {
  display: flex;
  flex-grow: 1;
  flex: 1;
}
.mainAsideContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
