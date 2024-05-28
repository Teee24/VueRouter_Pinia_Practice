<script setup>
import UserSettingNav from './UserSettingNav.vue'
</script>
<template>
  <div>
    <h1>User Settings</h1>
    <UserSettingNav />
    <router-view />
    <router-view name="helper" />
  </div>
</template>
<style>
h1 {
  color: cornflowerblue;
}
</style>
