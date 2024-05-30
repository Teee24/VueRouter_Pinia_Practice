import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore(
  'Login', // 在local Storage上面看的key
  () => {
    const password = ref('')
    const account = ref('')

    const isAuthenticatedUser = [
      {
        account: 'abc',
        password: '123',
        user: 'test'
      },
      {
        account: 'may',
        password: '0506',
        user: 'Jane'
      }
    ]
    function login(password, account) {
      try {
        const foundUser = isAuthenticatedUser.find(
          (user) => user.account === account && user.password === password
        )
        if (foundUser) {
          console.log('找到使用者:', foundUser.user)
          alert(`Welcome，${foundUser.user}!`)
        } else {
          console.log('登入失敗')
          alert('登入失敗')
        }
      } catch (ex) {
        console.log('error:', ex)
      }
    }

    return { password, account, login }
  },
  {
    persist: true // 存在localStorage
  }
)
