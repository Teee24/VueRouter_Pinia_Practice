<script setup>
import { RouterLink, RouterView } from 'vue-router'
import demo from '@/components/Demo.vue'
</script>

<template>
  <div class="flexContainer">
    <header>Layout 嘗試中</header>
    <div class="flexContent">
      <nav>
        <demo />
      </nav>
      <div class="mainAsideContainer">
        <aside>
          <p>
            <strong>目前位置:</strong>
            {{ $route.fullPath }}
          </p>
        </aside>
        <main>
          <RouterView />
        </main>
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
  border: 2px solid orange;
}
main {
  padding: 2px;
  margin: 2px;
  border: 2px solid orange;
  flex: 1;
}
.flexContainer {
  padding: 2px;
  margin: 2px;
  border: 2px solid lightblue;
  display: flex;
  flex-direction: column;
}
nav {
  padding: 2px;
  margin: 2px;
  border: 2px solid lightsalmon;
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
  border: 2px solid lightsalmon;
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
