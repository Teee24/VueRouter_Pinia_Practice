<script setup></script>
<template>
  <div class="demo">
    <h2>Demo Content</h2>
    <ul>
      <li>
        <router-link to="/demo/01">入門</router-link>
      </li>
      <li>
        <router-link to="/demo/02">動態路由匹配</router-link>
      </li>
      <li>
        <router-link to="/demo/03">路由的匹配語法</router-link>
      </li>
      <li>
        <router-link to="/demo/04">嵌套路由</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style></style>
