<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="flex-1">
      <HeaderComponent/>
      <div class="m-5">
        <ListComponent/>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script setup>
import FooterComponent from "../components/header/HeaderComponent.vue"
import HeaderComponent from "../components/menu/HeaderComponent.vue"
import ListComponent from "../components/lists/UserListComponent.vue"
</script>

<style>

</style>