<script setup>
import UserSettingNav from './UserSettingNav.vue'
</script>
<template>
  <div class="usersetting">
    <h2>User Settings</h2>
    <UserSettingNav />
    <router-view />
    <router-view name="helper" />
  </div>
</template>
<style scoped>
h1 {
  color: lightsteelblue;
}
.usersetting {
  border: 3px solid orange;
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'nav content'
    'nav helper';
}
.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
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
