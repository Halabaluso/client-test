<template>
    <div v-if="client.arrowsearchlen !== 0" class="w-full my-5">
        <p class="text-primary"><i class="fa-solid fa-magnifying-glass"></i> Search clients list</p>
        <div v-if="client.arrowsearchlen !== 0" class="overflow-x-auto w-full">
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
                    <tr v-for="clients, i, index in client.arrowsearch" :key="clients">
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
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { clientsStore } from "../../stores/clientstore"
const client = clientsStore()

const idClient = (id) => {
    client.takeIdClient(id)
}

const clientObject = (object, id) => {
    idClient(id)
    client.takeObjectClient(object)
}
</script>

<style></style>