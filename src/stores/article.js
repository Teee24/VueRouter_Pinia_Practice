import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTodoStore } from '@/stores/todo'

export const useArticleStore = defineStore(
  'arctcleId',
  () => {
    const price = ref(0)

    const users = ref([
      { id: 1, name: 'Alice', active: true },
      { id: 2, name: 'Bob', active: false },
      { id: 3, name: 'Charlie', active: true }
    ])

    const doublePrice = computed(() => price.value * 2)

    const TriplePrice = computed(() => price.value * 3)

    const getUserById = computed(() => {
      return (userId) => users.value.find((user) => user.id === userId)
    })

    const todoStore = useTodoStore()
    const crossGetter = computed(() => {
      return todoStore.numberOftodo + price.value
    })
    return { price, users, doublePrice, TriplePrice, getUserById, crossGetter }
  },
  {
    persist: { storage: sessionStorage } // 存在sessionStorage
  }
)
