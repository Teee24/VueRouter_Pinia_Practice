import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 註冊路由器插件
const app = createApp(App)

// use()需要在mount()之前呼叫
app.use(createPinia())
app.use(router)

app.mount('#app')

/* 和上面一樣 */
// createApp(App)
//   .use(router)
//   .mount('#app')
