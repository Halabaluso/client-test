<template>
    <form @submit="singInFunction($event)" class="shadow-lg p-5 rounded-lg">
        <LoadComponent :isLoading = data.loading />
        <ShowAlert :msg = data.msgalert :css = data.cssalert :show = data.booleanalert />
        <h1 class="font-bold text-xl mb-5"><i class="fa-solid fa-user"></i> Sing In</h1>
        <div>
            <label class="text-xs italic">User</label>
            <input type="text" placeholder="mail@mail.com" class="input input-bordered w-full max-w-xs" />
        </div>
        <div>
            <label class="text-xs italic">Password</label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div id = "actions" class="mt-5">
            <button type="submit" class="btn btn-primary m-1 ml-0">Sing In</button>
            <router-link to = "/" class="btn m-1">Register</router-link>
        </div>
    </form>
</template>

<script setup>
import LoadComponent from "../uxui/loading.vue"
import ShowAlert from "../uxui/alerts.vue"
import { connectDB } from "../../db/connect"
import { reactive } from "vue"
import { userstore } from "../../stores/client"
const data = reactive({
    username: "",
    password: "adminadmin",

    loading: false,
    booleanalert: false,
    msgalert : "",
    cssalert: "",
})


const singInFunction = async (e) => {
    e.preventDefault()
    if(validateForm()){
        const db = await connectDataBase()
        if(db.err === true){
            showAlert("Un error ha sucedido", "alert-error")
        }else{
            showAlert("Conexión realizada.", "alert-info")
            const userobject = takeUserData(db.msg)
            console.log(userobject)
            if(userobject.err === false){
                showAlert("Usuario encontrado.", "alert-info")
            }else{
                showAlert("Usuario no encontrado.", "alert-error")
            }
        }
    }
}
const connectDataBase = async (e) => {
    const db = new connectDB("https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json")
    const datadb = await db.connectDatabase()
    return datadb
}
const showAlert = (msg, css) => {
    data.msgalert = msg
    data.cssalert = css
    data.booleanalert = true
    setTimeout(() => {
        data.booleanalert = false
    }, 2000)
}
const takeUserData = (arrow) => {
    const user = userstore()
    user.takeDataClient(arrow, data.username)
    return user.userobject
}
const validateForm = () => {
    let validate = false
    if(data.username.length < 3 || data.password.length < 3){
        showAlert("Campos vacios o demasiado cortos", "alert-error")
    }else{
        validate = true
    }

    return validate
}
</script>

<style>

</style>