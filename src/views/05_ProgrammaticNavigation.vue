<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// TODO:
// 字串路徑
// router.push('/users/eduardo')

// // 帶有路徑的對象
// router.push({ path: '/users/eduardo' })

// // 命名的路由，並加上參數，讓路由建立 url
// router.push({ name: 'user', params: { username: 'eduardo' } })

// // 帶查詢參數，結果是 /register?plan=private
// router.push({ path: '/register', query: { plan: 'private' } })

// // 帶 hash，結果是 /about#team
// router.push({ path: '/about', hash: '#team' })

// // TODO:
// const username = 'eduardo'
// // 我們可以手動建立 url，但我們必須自己處理編碼
// router.push(`/user/${username}`) // -> /user/eduardo
// // 同样
// router.push({ path: `/user/${username}` }) // -> /user/eduardo
// // 使用 `name` 和 `params` 從自動 URL 編碼中獲益
// router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// // `params` 不能與 `path` 一起使用
// router.push({ path: '/user', params: { username } }) // -> /user

// // TODO:
// // 向前移動一筆記錄，與 router.forward() 相同
// router.go(1)

// // 傳回一筆記錄，與 router.back() 相同
// router.go(-1)

// // 前進 3 筆記錄
// router.go(3)

// // 如果沒有那麼多紀錄，靜默失敗
// router.go(-100)
// router.go(100)
</script>
<template>
  <h1>編程式導航</h1>
  <h2>router實例</h2>
  <p>
    聲明式 - ><code>&lt;router-link :to="..." replace&gt;</code>、<code
      >&lt;router-link :to="..."></code
    >
  </p>
  <p>編程式 - ><code>router.replace(...)</code>、<code>router.push(...)</code></p>
  <p>router-link :to="...">相當於呼叫router.push(...)</p>
  <strong style="color: crimson">如果提供了path，params會被忽略</strong>
  <p>
    想要導航到不同的URL，可以使用router.push方法。這個方法會在history
    堆疊中新增一個新的記錄，所以，當使用者點擊瀏覽器後退按鈕時，會回到先前的URL。
  </p>
  <h2>替換當前位置</h2>
  <p>在導航時不會向history 添加新記錄，取代了目前的url</p>
  <p>
    router.push({ path: '/home', replace: true }) <strong>=</strong> router.replace({ path: '/home'
    })
  </p>
  <h2>橫跨歷史</h2>
  <p>此方法採用整數作為參數，表示在歷史堆疊中前進或後退多少步</p>
  <h2>篡改歷史</h2>
  <strong
    >不論是什麼歷史紀錄模式 (使用 HTML5 history 模式還是 hash
    模式)，這些導覽方法都會如預期執行</strong
  >
  <h1>命名路由</h1>
  <router-link :to="{ name: 'user', params: { username: 'erina' } }"> User </router-link>
</template>
<style></style>
