<template>
    <div class="w-full m-5">
        <div v-if="client.arrow.length === 0" class="w-full bg-primary p-5 rounded-lg shadow flex-row flex items-center">
            <i class="fa-solid fa-people-arrows text-2xl text-white m-2"></i>
            <p class="text-white">Ningún cliente añadido, añada un cliente para ver los cambios.</p>
        </div>
        <div v-if="client.arrow.length > 0" class="overflow-x-auto w-full">
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
                    <tr v-for="clients, i in client.arrow" :key="clients">
                        <th>{{ i + 1 }}</th>
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
import { clientsStore } from "../../stores/clientstore"
const client = clientsStore()
</script>

<style></style>