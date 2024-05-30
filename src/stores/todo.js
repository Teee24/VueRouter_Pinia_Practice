import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = () => {
  // 為了完整型別推理，建議使用箭頭函數
  // 定義狀態初始值
  // state練習
  const todos = ref([
    {
      content: '',
      isComplete: false,
      date: '2024-05-30',
      user: 'Tina'
    },
    {
      content: '',
      isComplete: true,
      date: '2024-05-31',
      user: 'taylor'
    }
  ])

  let numberOftodo = todos.value.length

  function reset() {
    todos.value = []
    numberOftodo = 0
  }
  return { todos, numberOftodo, reset }
}
