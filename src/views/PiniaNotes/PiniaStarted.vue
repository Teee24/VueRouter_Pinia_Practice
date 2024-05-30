<script setup>
import { useCounterStore } from '@/stores/counter'

const conter = useCounterStore()
console.log(conter)
</script>
<template>
  <h2>Store (Ex: Pinia) 是一個保存狀態和業務邏輯的實體</h2>
  <h3>全域狀態 like JS 的 windows.xxx</h3>
  <table>
    <thead>
      <tr>
        <th>Store</th>
        <th>Pinia</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>state</td>
        <td>data</td>
      </tr>
      <tr>
        <td>getter</td>
        <td>computed</td>
      </tr>
      <tr>
        <td>action</td>
        <td>methods</td>
      </tr>
    </tbody>
  </table>
  <h3>使用時機</h3>
  <p>一個Store 應該包含可以在整個應用程式中存取的資料。</p>
  <p>
    <span style="color: cornflowerblue">在許多地方使用的數據</span>-> Ex: 顯示在導覽列中的使用者信息
  </p>
  <p>
    <span style="color: cornflowerblue">需要透過頁面保存的數據</span>-> Ex:一個非常複雜的多步驟表單
  </p>
  <label>注意事項: </label>
  <p style="color: crimson">避免在Store 中引入那些原本可以在元件中保存的本地數據</p>
  <p style="color: crimson">並非所有的應用程式都需要存取全域狀態 ，EX:一些機密資訊</p>
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
