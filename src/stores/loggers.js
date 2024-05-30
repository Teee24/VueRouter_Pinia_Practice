import { defineStore } from 'pinia'
import { useLoginStore } from '@/stores/login'
import { ref } from 'vue'

export const useLoggerStore = defineStore('logger', () => {
  const logs = ref([])

  function subscribeToLoginActions() {
    const loginstore = useLoginStore()
    console.log('login +1')
    loginstore.$subscribeTo(
      loginstore,
      () => loginstore.login,
      () => {
        this.logs.push('login +1')
      }
    )
  }

  return { logs, subscribeToLoginActions }
})
