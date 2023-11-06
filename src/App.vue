<template>
  <router-view/>
</template>

<script setup>
import { onMounted } from "vue"
import { userstore } from "./stores/client"
import { useRouter } from "vue-router"
onMounted(() => {
  const user = userstore()
  if(user.userobject.err === true){
    useRouter().push("/")
  }
})
</script>

<style>

</style>
