import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/* defineStore() 的返回值可以命名，以 use 開頭且以 Store 結尾。
    （例如 useUserStore，useCartStore，useProductStore）
    第一個參數是你應用程式中 Store 的唯一識別符。
*/
// Setup Stores
// 定義購物車存儲區
export const useShoppingCartStore = defineStore('shoppingCart', () => {
  // 使用 setup 函數初始化存儲區
  const cartItems = ref([])

  // 新增商品到購物車
  const addToCart = (product) => {
    cartItems.value.push(product)
  }

  // 從購物車中移除商品
  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
    }
  }

  // 獲取購物車商品數量
  const cartItemCount = () => {
    return cartItems.value.length
  }

  // 返回需要的狀態和方法
  return {
    cartItems,
    addToCart,
    removeFromCart,
    cartItemCount
  }
})
