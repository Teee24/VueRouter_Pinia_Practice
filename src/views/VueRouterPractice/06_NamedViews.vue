<script setup>
import UserSetting from '../UsersettingExample/UserSetting.vue'
</script>
<template>
  <div>
    <h1>命名視圖</h1>
    <ul>
      <li>
        <router-link to="/demo/06/nameviews01">First page</router-link>
      </li>
      <li>
        <router-link to="/demo/06/nameviewsother">Second page</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
  <hr />
  <br />

  <h1>嵌套命名視圖</h1>
  <router-link :to="{ name: 'set' }">Go to 嵌套命名視圖 練習</router-link>
</template>
<style scoped>
.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
