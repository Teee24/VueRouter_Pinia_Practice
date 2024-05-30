<script setup>
import { useLoginStore } from '@/stores/login'

const loginstore = useLoginStore()
</script>
<template>
  <h1>Action</h1>
  <h2>用來定義業務邏輯</h2>
  <p>
    嘗試做建議的驗證{ account: 'abc', password: '123', user: 'test' }, { account: 'may', password:
    '0506', user: 'Jane' }
  </p>
  <label>account:</label>
  <input type="text" v-model="loginstore.account" />
  <label>password:</label>
  <input type="text" v-model="loginstore.password" />
  <button @click="loginstore.login(loginstore.password, loginstore.account)">送出</button>
  <h2>訂閱action</h2>
</template>
<style></style>
