<script setup>
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 為了完整型別推理，建議使用箭頭函數
  state: () => {
    return {
      // 所有這些屬性都將自動推斷出它們的類型
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true
    }
  }
})

const store = useStore()

// 實作介面幫助Store轉型
// interface State {
//   userList: UserInfo[]
//   user: UserInfo | null
// }
// interface UserInfo {
//   name: string
//   age: number
// }
// const useUserStore = defineStore('storeId', {
//   state: (): State => {
//     return {
//       userList: [],
//       user: null,
//     }
//   },
// })

// const counter = useCountingStore()
// console.log('before', counter)
// // 重置 state
// counter.$reset()
// console.log('after', counter)
// console.log(store)
// store.$reset()
// console.log(store)
</script>
<template>
  <h1>State</h1>
  <h3>
    在Pinia 中，state 被定義為一個傳回初始狀態的函數。這使得Pinia 可以同時支援服務端和客戶端。
  </h3>
  <p>{{ store.count }}</p>
  <h2>TypeScrip</h2>
  <p>在某些情況下，你可能需要提供一些額外的訊息以幫助 TypeScript 進行類型推斷</p>
  <p>
    Ex: 當使用 <span style="color: cornflowerblue">泛型</span>時，可能需要額外幫助 TypeScript
    進行類型推斷
  </p>
  <p>
    Ex: 當 <span style="color: cornflowerblue">引用外部庫或模組</span>時，Pinia
    可能無法自動推斷類型，這時你需要手動指定類型
  </p>
  <p>Ex: 在一些複雜的邏輯中，你可能需要額外的型別定義來確保 TypeScript 知道你的意圖</p>
  <p>
    ->
    <code
      >type MyCustomType = { id: string, value: number, } const customData = ref&lt;MyCustomType |
      null>(null)</code
    >
  </p>
  <p>! 可以用一個介面定義state，並且加上state()的回傳值的類型</p>
  <h2>Accessing the state</h2>
  <p>預設情況下，你可以透過store實例存取state，直接對其進行讀寫。</p>
  <p>Ex: const store = useStore()</p>
  <p>store.count++</p>
  <!-- <p>{{ store.count++ }}</p> -->
  <h2>Resetting the state</h2>
  <!-- <p>{{ store.$reset }}</p> -->
  <h2>Usage with the Options API</h2>
  <h3>Modifiable state</h3>
  <h2>Mutating the state</h2>
  <h2>Replacing the state</h2>
  <h2>Subscribing to the state</h2>
  <h2>可修改的state</h2>
  <h2>變更state</h2>
  <!-- <p>
    {{
      store.$patch({
        count: store.count + 1,
        age: 120,
        name: 'DIO'
      })
    }}
  </p>
  <p>
    {{
      store.$patch((state) => {
        state.items.push({ name: 'shoes', quantity: 1 })
        state.hasChanged = true
      })
    }}
  </p> -->
  <h2>替換state</h2>
  <p>你不能完全替換掉store 的state，因為那樣會破壞其響應性。但是，你可以patch它。</p>
  <p>{{ (store.$state = { count: 24 }) }}</p>
  <h2>訂閱state</h2>
  <p>使用$subscribe()的好處是subscriptions在patch後只觸發一次(例如，當使用上面的函數版本時)</p>
</template>
<style></style>
