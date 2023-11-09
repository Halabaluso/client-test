import { defineStore } from "pinia"
import { writeData, filterData, loadData, removeData, updateData } from "../db/firebasemethods"

const clientsStore = defineStore("clientsstore", {
    state: () => {
        return{
            arrow: [],
            arrowsearch: [],

            arrowsearchlen: 0,
            arrowlen: 0,

            idClient: "",
            objectClient: {}
        }
    },
    actions:{
        async loadClients(where){
            const data = await loadData(where)
            if(data !== null){
                this.arrow = data
                this.arrowsearch = {}
            }
            this.takeLengthObject1(data)
            this.takeLengthObject(this.arrowsearch)
        },
        async pushclient(client){
            const dbconnect = await writeData("client", client)
            this.loadClients("client")
            return dbconnect
        },
        async searchClient(where, what){
            const dbconnect = await filterData("client", where, what)
            this.arrowsearch = dbconnect.val()
            this.takeLengthObject(dbconnect.val())
            return dbconnect.val()
        },
        async modifyclient(id, object){
            const dbconnect = await updateData(`client/${id}`, object)
            this.loadClients("client")
            return dbconnect
        },
        async deleteclient(id){
            const data = await removeData(`client/${id}`)
            await this.loadClients("client")
            return data
        },
        takeIdClient(id){
            this.idClient = id
        },
        takeObjectClient(object){
            this.objectClient = object
        },
        takeLengthObject(element){
            if(element !== null){
                this.arrowsearchlen = Object.values(element).length
            }else{
                this.arrowsearchlen = 0
            }
        },
        takeLengthObject1(element){
            if(element !== null){
                this.arrowlen = Object.values(element).length
            }else{
                this.arrowslen = 0
            }
        }
    }
})

export {
    clientsStore
}