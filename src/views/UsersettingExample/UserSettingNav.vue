<script setup></script>
<template>
  <div class="set_nav">
    <router-link to="/settings/emails">emails</router-link>
    <br />
    <router-link to="/settings/profile">profile</router-link>
  </div>
</template>
<style>
.set_nav {
  grid-area: nav;
  border: 3px solid lightblue;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
</style>
