<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h1 id = "tittleform" class="font-bold text-lg">New client</h1>
        <form @submit="sendDataStore($event)" class="py-4">
            <div class="mb-2">
                <label class="text-xs italic">User</label>
                <input id = "nameclient" v-model="data.name" type="text" placeholder="mail@mail.com" class="input input-bordered w-full" />
            </div>
            <div class="mb-2">
                <label class="text-xs italic">Lastname</label>
                <input id = "lastnameclient" v-model="data.lastname" type="text" placeholder="mail@mail.com" class="input input-bordered w-full" />
            </div>
            <div class="mb-2">
                <label class="text-xs italic">Phone</label>
                <input id = "numberclient" v-model="data.number" type="number" placeholder="mail@mail.com" class="input input-bordered w-full" />
            </div>
            <div class="mb-2">
                <label class="text-xs italic">Address</label>
                <input id = "addressclient" v-model="data.address" type="text" placeholder="mail@mail.com" class="input input-bordered w-full" />
            </div>
            <div class="mt-5 flex flex-col justify-end">
                <button type="submit" id = "addclientaction" class="btn btn-primary">Create client <i class="fa-solid fa-plus"></i></button>
            </div>
        </form>
    </div> 
 </dialog>
 <AlertComponent  :msg = data.msgalert :css="data.cssalert" :show="data.booleanalert" />
</template>

<script setup>
import AlertComponent from "../uxui/alerts.vue"

import moment from "moment"
import { clientsStore } from "../../stores/clientstore"
import { reactive } from "vue"

const clients = clientsStore()
const data = reactive({
    name : "",
    lastname: "",
    address: "",
    number : 0,

    cssalert: "",
    msgalert: "",
    booleanalert: false
})

const sendDataStore = (e) => {
    e.preventDefault()
    if(validateForm()){
        const object = createClient()
        clients.pushclient(object)
        data.name = ""
        data.lastname = ""
        data.address = ""
        data.number = 0
        showAlert("Cliente nuevo añadido.", "alert-info")
    }else{
        showAlert("Campos vacíos o demasiado cortos.", "alert-error")
    }
}

const createClient = () => {
    const object = {
        name: data.name.toUpperCase(),
        lastname: data.lastname.toUpperCase(),
        address: data.address.toUpperCase(),
        number: data.number
    }
    return object
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
    if(data.name.length < 3 || data.lastname.length < 3 || data.address.length < 3 || data.number === 0){
        boolean = false
    }
    return boolean
}
</script>

<style>

</style>