<script setup></script>
<template>
  <h1>嵌套路由</h1>
  <p>
    <router-link to="/users/eduardo">/users/eduardo</router-link>
    <br />
    <router-link to="/users/eduardo/profile">/users/eduardo/profile</router-link>
  </p>
  <h2>嵌套的命名路由</h2>
  <p>通常會為子路由命名</p>
  <p>
    所有路由的<span style="color: crimson">命名必須是唯一的</span
    >。如果為多條路由新增相同的命名，路由器只會保留最後那條。
  </p>
</template>
<style></style>
