<template>
  <div>
    <form @submit="searchClient($event)" class="flex flex-row items-center">
        <button type="submit" class="btn mr-2"><i class="fa-solid fa-magnifying-glass text-xl"></i></button>
        <input v-model="data.search" type="text" placeholder="Search" class="input input-bordered w-full max-w-xs" />
    </form>
  </div>
  <ShowAlert :msg = data.msgalert :css = data.cssalert :show = data.booleanalert />
</template>

<script setup>
import { reactive } from "vue"
import { clientsStore } from "../../stores/clientstore"
import ShowAlert from "../uxui/alerts.vue"

const data = reactive({
    search: "",
    msgalert: "",
    cssalert: "",
    booleanalert: ""
})

const searchClient = async (e) => {
    e.preventDefault()
    if(validateForm()){
        let data = await searchDataClient()
        if(data === null){
            showAlert("Ningún cliente encontrado", "alert-warning")
        }else{
            showAlert("Cliente/s encontrado.", "alert-info")
        }
    }else{
        showAlert("Campo vacío o demasiado corto.", "alert-error")
    }
}

const searchDataClient = async () => {
    const client = clientsStore()
    let clientsearch = await client.searchClient("name", data.search.toUpperCase())
    if(clientsearch === null){
        clientsearch = await client.searchClient("lastname", data.search.toUpperCase())
    }else if(clientsearch === null){
        clientsearch = await client.searchClient("number", data.search)
    }
    return clientsearch
}

const showAlert = (msg, css) => {
    data.msgalert = msg
    data.cssalert = css
    data.booleanalert = true
    setTimeout(() => {
        data.booleanalert = false
    }, 2000)
}

const validateForm = () => {
    let boolean = true

    if(data.search.length < 3){
        boolean = false
    }

    return boolean
}
</script>

<style>

</style>