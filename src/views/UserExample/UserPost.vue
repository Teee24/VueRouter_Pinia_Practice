<script setup></script>
<template>
  <!-- 路徑參數 -->
  <div>User {{ $route.params.username }} with post {{ $route.params.postId }}</div>

  <router-link to="/demo">返回</router-link>
</template>
<style></style>
