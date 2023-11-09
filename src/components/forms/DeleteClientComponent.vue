<template>
  <dialog id="my_modal_delete_client" class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h1 id = "tittleform" class="font-bold text-lg text-error">¿Are you sure?</h1>
        <form @submit="deleteClient($event)" class="py-4">
            <div class="mb-2">
                <label class="text-xs italic">Write "DELETE" for delete client</label>
                <input id = "deletestring" v-model="data.deletestring" type="text" placeholder="mail@mail.com" class="input input-bordered w-full" />
            </div>
        </form>
        <form method="dialog">
            <button @click="deleteClient()" class="btn btn-error"><i class="fa-solid fa-trash-can"></i> Delete client</button>
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
    deletestring : "DELETE",

    cssalert: "",
    msgalert: "",
    booleanalert: false
})

const deleteClient = async (e) => {
    try {
        e.preventDefault()   
    } catch (error) {
        //
    }
    if(validateForm()){
        const data = await deleteFunction()
        if(data === false){
            showAlert("Error al borrar cliente.", "alert-error")
        }else{
            showAlert("Cliente borrado.", "alert-info")
        }
    }
}

const deleteFunction = async () => {
    let id = clients.idClient
    const data = await clients.deleteclient(id)
    return data 
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
    if(data.deletestring !== "DELETE"){
        boolean = false
    }
    return boolean
}
</script>

<style>

</style>