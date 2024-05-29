<script setup>
import UserSetting from './UserSetting.vue'
</script>
<template>
  <ul>
    <li>
      <router-link to="/demo/06/nameviews01">First page</router-link>
    </li>
    <li>
      <router-link to="/demo/06/nameviewsother">Second page</router-link>
    </li>
  </ul>
  <router-view class="view one"></router-view>
  <router-view class="view two" name="a"></router-view>
  <router-view class="view three" name="b"></router-view>
  <hr />
  <h1>嵌套命名視圖</h1>
  <div class="set">
    <router-link :to="{ name: 'set' }">Go to userseting</router-link>
    <UserSetting />
  </div>
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
.set {
  border: 3px solid orange;
}
</style>
