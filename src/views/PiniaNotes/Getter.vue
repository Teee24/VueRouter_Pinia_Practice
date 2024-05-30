<script setup>
import { useArticleStore } from '@/stores/article'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const articlestore = useArticleStore()
const { doublePrice, TriplePrice, getUserById, crossGetter } = articlestore
const { price } = storeToRefs(articlestore)

articlestore.price = 100
console.log(articlestore.doublePrice)
</script>
<template>
  <h1>Getter</h1>
  <p style="color: crimson">注意:解構過的:不會自動更新，只顯示初始值</p>
  <input v-model="price" type="text" />
  <p>Double Price is(解構過的:) {{ doublePrice }}</p>
  <p>Double Price is {{ articlestore.doublePrice }}</p>
  <p>Triple Price is {{ TriplePrice }}</p>
  <h2>Getter只是幕後的計算屬性，所以<span>不能傳遞任何參數</span>給它們。</h2>
  <p></p>
  <p>User 2: {{ getUserById(2) }}</p>
  <h3>造訪其他 store 的 getter</h3>
  <p style="background-color: cornsilk">
    artice的price + todo的numberOftodo:{{ articlestore.crossGetter }}
  </p>
</template>
<style></style>
