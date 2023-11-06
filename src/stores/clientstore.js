import { defineStore } from "pinia"

const clientsStore = defineStore("clientsstore", {
    state: () => {
        return{
            arrow: []
        }
    },
    actions:{
        pushclient(client){
            this.arrow.push(client)
        },
        modifyclient(id, object){
            this.arrow.forEach((element,i) => {
                if(element.id === id){
                    this.arrow[i] = object
                }
            })
        },
        deleteclient(id){
            let newarrow = []
            this.arrow.forEach(element => {
                if(element.id !== id){
                    newarrow.push(element)
                }
            })
            this.arrow = newarrow
        },

    }
})

export {
    clientsStore
}