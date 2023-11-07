import { defineStore } from "pinia"
import { writeData, filterData, loadData } from "../db/firebasemethods"

const clientsStore = defineStore("clientsstore", {
    state: () => {
        return{
            arrow: [],
            arrowsearch: [],

            arrowsearchlen: 0,
            arrowlen: 0
        }
    },
    actions:{
        async loadClients(where){
            const data = await loadData(where)
            takeLengthObject1(data)
        },
        async pushclient(client){
            const dbconnect = await writeData("client", client)
            this.arrow.push(client)
            return dbconnect
        },
        async searchClient(where, what){
            const dbconnect = await filterData("client", where, what)
            this.arrowsearch = dbconnect.val()
            this.takeLengthObject(dbconnect.val())
            return dbconnect.val()
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
        takeLengthObject(element){
            if(element !== null){
                this.arrowsearchlen = Object.values(element)   
            }else{
                this.arrowsearchlen = 0
            }
        }
        takeLengthObject1(element){
            if(element !== null){
                this.arrowlen = Object.values(element)   
            }else{
                this.arrowslen = 0
            }
        }
    }
})

export {
    clientsStore
}