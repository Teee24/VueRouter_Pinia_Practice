<script setup></script>
<template>
  <div class="demo">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/demo">練習</RouterLink></li>
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
  </div>
</template>
<style></style>
