<script setup></script>
<template>
  <h1>路由的匹配語法</h1>
  <h2>在參數中自訂正規則</h2>
  <div>
    <p>正則表達式</p>
    <u1>
      <li>[^/] -> 除了斜槓 / 以外的任意字符</li>
      <li>+ -> 前面的表達式一次或多次</li>
      <li>([^/]+) -> 任意不包含斜槓的連續字符序列</li>
    </u1>
    <p>ex: (\\d+) -> /123、/456</p>
  </div>
  <h2>可重複的參數</h2>
  <div>
    <p>ex:/first/second/third，你應該用*（0 個或多個）和+（1 個或多個）將參數標記為可重複</p>
    <ul>
      <li>/:chapters -> 匹配 /one, /one/two, /one/two/three, 等 { path: '/:chapters+' }</li>
      <li>/:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等 { path: '/:chapters*' }</li>
    </ul>
  </div>
  <h2>Sensitive 與strict 路由配置</h2>
  <ul>
    <li>預設: 不區分大小寫的，並且能匹配帶有或不帶有尾部斜線的路由</li>
    <li>{ path: '/users/:id', sensitive: true } -> /users/123</li>
    <li>{ path: '/users/:id?' } -> /users, /Users, /users/42</li>
    <li>strict -> 路由器是否會對路徑的結尾斜線進行嚴格匹配</li>
    <li>sensitive -> 路由器是否會區分大小寫</li>
  </ul>

  <h2>可選參數</h2>
  <p>將一個參數標記為可選</p>
  <ul>
    <li>*參數是可選 -> 參數可以出現零次或一次</li>
    <li>?參數不能重複</li>
    <li style="color: crimson">在同一個路徑中，? 和 * 修飾符不能重複使用</li>
  </ul>
  <h2>偵錯</h2>
  <p>Tool: Path Ranker</p>
</template>
<style></style>
