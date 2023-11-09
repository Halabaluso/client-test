<template>
    <div class="w-full my-5">
        <div v-if="client.arrowlen === 0 && client.arrowsearchlen === 0" class="w-full bg-primary p-5 rounded-lg shadow flex-row flex items-center">
            <i class="fa-solid fa-people-arrows text-2xl text-white m-2"></i>
            <p class="text-white">Ningún cliente añadido, añada un cliente para ver los cambios.</p>
        </div>
        <div v-if="client.arrowlen > 0" class="overflow-x-auto w-full">
            <p class="text-primary"><i class="fa-solid fa-list"></i> Client list</p>
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <template v-for="clients, i,index in client.arrow" :key="clients">
                        <tr id = "clientdata" v-if="data.startpage <= index && data.finishpage >= index">
                            <th>{{ index + 1 }}</th>
                            <td>{{ clients.name }} </td>
                            <td>{{ clients.lastname }}</td>
                            <td>{{ clients.number }}</td>
                            <td>{{ clients.address }}</td>
                            <td>
                                <div class="flex flex-row">
                                    <button @click="idClient(i)" onclick="my_modal_delete_client.showModal()" class="btn btn-error mr-2"><i class="fa-solid fa-trash-can"></i></button>
                                    <button @click="clientObject(clients, i)" onclick="my_modal_modify.showModal()" class="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="flex justify-center mt-5">
            <div class="join">
                <button @click="changeNumberPage(true)" class="join-item btn border-primary">«</button>
                <button class="join-item btn border-primary border bg-white">{{data.numberpage}}</button>
                <button @click="changeNumberPage(false)" class="join-item btn border-primary">»</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import { clientsStore } from "../../stores/clientstore"
const client = clientsStore()

const data = reactive({
    numberpage: 1,
    startpage: 0,
    finishpage: 10,
})

onMounted(async () => {
    await client.loadClients("client")
})

const idClient = (id) => {
    client.takeIdClient(id)
}

const clientObject = (object, id) => {
    idClient(id)
    client.takeObjectClient(object)
}

const changeNumberPage = (boolean) => {
    if(boolean === false){
        data.numberpage++
        data.startpage = data.startpage + 10
        data.finishpage = data.finishpage + 10
        const clientlen = document.querySelectorAll("#clientdata").length
        if(clientlen == 0){
            console.log(data.numberpage)
            console.log("Pasa :D")
            data.numberpage--
            console.log(data.numberpage)
            data.startpage = data.startpage - 10
            data.finishpage = data.finishpage - 10
        }else{
            console.log("No hay mas clientes")
        }
    }else{
        data.numberpage--
        if(data.numberpage === 0){
            data.numberpage = 1
            data.startpage = 0
            data.finishpage = 10
        }else{
            data.startpage = data.startpage - 10
            data.finishpage = data.finishpage - 10
        }
    }
}
</script>

<style></style>