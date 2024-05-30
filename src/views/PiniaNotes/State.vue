<script setup>
import { useTodoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { createPinia } from 'pinia'

const todostore = useTodoStore()

// 把 todo ref 解構為普通對象
const { todos } = storeToRefs(todostore)

// 解構action (function)
const { reset } = todostore

// patch 使用
// const changeContent = () => {
//   todostore.patch({ content: 'I love Taylor' })
// }

// 變更
const addTodo = () => {
  console.log('todo')
  const newTodo = {
    date: new Date(),
    content: 'New Todo',
    isComplete: false,
    user: 'Tina'
  }
  todos.value.push(newTodo)
}

// 替換 state
// 注意：Pinia 不直接支援替換整個狀態對象，但你可以透過重置整個 store 來實現
// 例如：store.$reset() 或 store.state = initialState

// 訂閱 state
// const unsubscribe = todostore.$subscribe((mutation, state) => {
//   console.log('State changed:', state)
// })
// todostore.subscribe((mutation, state) => {
//   console.log('mutation', mutation)
//   console.log('state', state)
// })
</script>
<template>
  <h1>State</h1>
  <h3>
    在Pinia 中，state 被定義為一個傳回初始狀態的函數。這使得Pinia 可以同時支援服務端和客戶端。
  </h3>
  <ul>
    <li>state 要回傳一個物件，裡面定義所有用到的 state 和初始值</li>
    <li>沒有辦法動態加入新的 state 到 store 中，所有要共用的狀態都必須要 store 內先定義初始值</li>
    <li>可以透過 storeInstance.stateName 直接取得 state</li>
  </ul>
  <p style="background-color: cornsilk">直接使用: {{ todostore }}</p>
  <!-- <h2>TypeScript</h2> -->
  <!-- <p>在某些情況下，你可能需要提供一些額外的訊息以幫助 TypeScript 進行類型推斷</p>
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
  <p>! 可以用一個介面定義state，並且加上state()的回傳值的類型</p> -->

  <h2>Accessing the state</h2>
  <p>預設情況下，你可以透過store實例存取state，直接對其進行讀寫。</p>
  <p style="background-color: cornsilk">直接讀寫: {{ todos[0] }}</p>

  <h2>Resetting the state</h2>
  <p>會將 store 內的狀態全部初始化，回到預設的初始值</p>
  <p>->counterStore.$reset();</p>
  <p>在Setup Stores中，您需要建立自己的$reset()方法</p>
  <button @click="reset">reset</button>
  <p style="background-color: cornsilk">結果:{{ todostore.numberOftodo }}</p>

  <h2>Modifiable state</h2>
  <p>修改單一 state：直接修改</p>
  <p>-> counterStore.count++;</p>
  <p style="background-color: cornsilk">結果: {{ todostore.numberOftodo++ }}</p>

  <h2>Mutating the state</h2>
  <p>一次修改單個或多個 state：storeInstance.$patch()，根據傳進去的參數不同，分成兩個寫法</p>
  <ul>
    <li>
      傳入物件，key 為 state 名稱、value 為更新的值-> store.$patch({stateName1: newValue},
      {stateName2: newValue})
      <p>Ex:</p>
      <p>const counterStore = useCounterStore();</p>
      <p>counterStore.$patch({ count: 100 })</p>
      <button @click="addTodo">changeContent</button>
      <p style="background-color: cornsilk">結果:{{ todos }}</p>
      <p>counterStore.$patch({ count: 100, name: 'Angela' })</p>
    </li>
    <li>
      傳入回呼函式，函式可以取得 store 內的 state 進行操作; Ex:store.$patch((state) => { //直接操作
      state state.arr.reverse();})
    </li>
  </ul>
  <h2>Replacing the state</h2>
  <p>你不能完全替換掉store 的state，因為那樣會破壞其響應性。但是，你可以patch它。</p>
  <p>-> // 這其實並沒有取代`$state` store.$state = { count: 24 }</p>
  <p>-> // 在它內部呼叫 `$patch()`： store.$patch({ count: 24 })</p>
  <p>也可透過更改pinia實例的state來設定整個應用程式的初始狀態</p>
  <p>-> pinia.state.value = {}</p>
  <h2>Subscribing to the state</h2>
  <p>型式:storeInstance.$subscribe((mutation, state) => { ... })</p>
  <p>會在 state 每次改變後觸發</p>
  <p>如果是透過 .$patch 一次修改多個 state，只會觸發一次</p>
  <p>通常會在元件 setup 內建立監聽($subscribe)，這個監聽器會綁定元件實例，在元件銷毀時一起銷毀</p>
  <p>subscribe裡面的 callback function 可以拿到兩個參數，分別是 mutation 物件、 state</p>
  <p>mutation 物件:</p>
  <ul>
    <li>
      type：這次改動是透過什麼方式
      <ul>
        <li>'direct'：直接改動，如 store.count++</li>
        <li>'patch object'：透過 $patch() 傳入物件來改動</li>
        <li>'patch function'：透過 $patch() 傳入函式來改動</li>
      </ul>
    </li>
    <li>storeId：被監聽的 store id</li>
    <li>payload：傳入 $patch() 內的參數，如果是直接改動 state 則為 undefined</li>
  </ul>
  <p>state： 被監聽的 store 實例內的整個 state 物件</p>
  <p style="color: crimson">
    ! 可以在subscribe裡，將整個 state 存到 localStorage -> localStorage.setItem("cart",
    JSON.stringify(state));
  </p>
  <h3>加上{ detached: true }</h3>
  <h4>
    通常情況下，當你在組件的 setup() 中訂閱狀態時，這個訂閱會隨著組件的卸載而取消，以防止內存洩漏。
  </h4>
  <p>
    但是有時候，你可能希望即使在組件被卸載後，這個訂閱依然存在，以便在其他地方持續監聽狀態的變化。
  </p>
  <p>pinia的$subscribe與watch</p>
  <p>1.$subscribe是pinia的方法可以用來監控pinia目前的狀態與所傳送的內容。</p>
  <p>2.watch則是vue所提供監控變數改變時可以執行函式或是通知的方法。</p>
</template>
<style></style>
