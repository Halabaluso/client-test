/*
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/
import { defineStore } from "pinia"

const userstore = defineStore("userstore", {
  state: () => {
    return{
      userobject: {
        err: true,
        data: {}
      }
    }
  },
  actions:{
    takeDataClient(clients, email){
      let object = {
        err: true,
        data: {}
      }
      clients.forEach(element => {
        if(element.email === email){
          object.data = element
          object.err = false
          this.userobject = object
        }
      })
    }
  }
})

export{
  userstore
}
