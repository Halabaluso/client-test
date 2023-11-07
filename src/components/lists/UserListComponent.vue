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
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="clients, i,index in client.arrow" :key="clients">
                        <th>{{ index + 1 }}</th>
                        <td>{{ clients.name }} </td>
                        <td>{{ clients.lastname }}</td>
                        <td>{{ clients.number }}</td>
                        <td>{{ clients.address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import { clientsStore } from "../../stores/clientstore"
const client = clientsStore()
onMounted(async () => {
    await client.loadClients("client")
})
</script>

<style></style>