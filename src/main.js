import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia' // 建立一個pinia 實例(根store) 並將其傳遞給應用程式

const pinia = createPinia()

// 註冊路由器插件
const app = createApp(App)

// use()需要在mount()之前呼叫

app.use(pinia)
app.use(router)

app.mount('#app')

/* 和上面一樣 */
// createApp(App)
//   .use(router)
//   .mount('#app')
