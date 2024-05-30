<script setup>
import { ref } from 'vue'

import { useShoppingCartStore } from '@/stores/shoppinpCart'
import { storeToRefs } from 'pinia'

// 使用 useCounterStore() 函數實例化 store
const cart = useShoppingCartStore()
// ✨

// `cartItems`是響應式的 ref
// 同時透過外掛程式新增的屬性也會被擷取為 ref
// 並且會跳過所有的 action 或非響應式 (不是 ref 或 reactive) 的屬性
const { cartItems } = storeToRefs(cart)
// 作為 action 的 increment 可以直接解構
const { addToCart } = cart

const product = ref('')
</script>
<template>
  <h1>Defining a Store</h1>
  <h2>Define Store</h2>
  <ul>
    <li>Store 是用defineStore()定義</li>
    <li>第一個參數要求是一個<span style="color: crimson">獨一無二的名字</span></li>
    <li>將傳回的函數命名為use...是符合組合式函數風格的約定</li>
    <li>非永久性儲存，可使用套件成永久性儲存</li>
  </ul>
  <h2>Option Stores</h2>
  <p>傳入一個帶有state、actions與getters屬性的Option 對象</p>
  <h2>Setup Stores</h2>
  <p>
    傳入一個函數，該函數定義了一些響應式屬性和方法，並且傳回一個帶有我們想要暴露出去的屬性和方法的物件
  </p>
  <h3>在Setup Store中</h3>
  <table>
    <thead>
      <tr>
        <th>Store</th>
        <th>Pinia</th>
        <th>Setup Store</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>state</td>
        <td>data</td>
        <td>ref()</td>
      </tr>
      <tr>
        <td>getter</td>
        <td>computed</td>
        <td>computed()</td>
      </tr>
      <tr>
        <td>action</td>
        <td>methods</td>
        <td>function()</td>
      </tr>
    </tbody>
  </table>
  <h3>注意:</h3>
  <p>store是一個用reactive包裝的對象，<span style="color: crimson">不能對它解構</span></p>
  <h2>Using the store</h2>
  <div>
    <label>以購物車舉例</label>
    <p>目前購物車商品數量: {{ cart.cartItemCount() }}</p>
    <button @click="cart.addToCart">加到購物車</button>
  </div>
  <hr />
  <h2>Destructuring from a Store</h2>
  <ul>
    <li>使用storeToRefs()，提取屬性時可保持其響應性</li>
  </ul>
  <div>
    <label>以購物車舉例</label>
    <p>目前購物車商品數量: {{ cartItems }}</p>
    <input type="text" v-model="product" />
    <button @click="addToCart(product)">加到購物車</button>
  </div>
</template>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
</style>
