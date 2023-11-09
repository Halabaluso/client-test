<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="flex-1">
      <HeaderComponent/>
      <div class="m-5">
        <SearchForm/>
        <ListSearchComponent/>
        <ListComponent/>
      </div>
    </div>
    <ModalDeleteClient/>
    <ModalModifyClient/>
    <FooterComponent/>
  </div>
</template>

<script setup>
import ModalModifyClient from "../components/forms/ModifyClientComponent.vue"
import ModalDeleteClient from "../components/forms/DeleteClientComponent.vue"
import ListSearchComponent from "../components/lists/UserListSearchComponent.vue"
import SearchForm from "../components/forms/SearchComponent.vue"
import FooterComponent from "../components/header/HeaderComponent.vue"
import HeaderComponent from "../components/menu/HeaderComponent.vue"
import ListComponent from "../components/lists/UserListComponent.vue"
</script>

<style>

</style>