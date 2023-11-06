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
      userobject: {}
    }
  },
  actions:{
    takeDataClient(clients, email){
      let object = {
        err: false,
        data: {}
      }
      clients.forEach(element => {
        if(element.email === email){
          object.data = element
          this.userobject = object
        }else{
          object.err = true
          this.userobject = object
        }
      })
    }
  }
})

export{
  userstore
}
