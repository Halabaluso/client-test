<template>
  <div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Clientes</a>
            <ul class="p-2">
              <li><button onclick="my_modal_1.showModal()">Crear cliente</button></li>
            </ul>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">Clients APP</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li tabindex="0">
          <details>
            <summary><i class="fa-solid fa-person-chalkboard"></i> Clients</summary>
            <ul class="p-2">
              <li class="w-max"><button onclick="my_modal_1.showModal()">New client</button></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <button id = "newclientheader" onclick="my_modal_1.showModal()" class="btn btn-primary">New client <i class="fa-solid fa-plus"></i></button>
    </div>

    <!--Modal botón crear cliente-->
    <AddClientModal/>
  </div>
</template>

<script setup>
import AddClientModal from "../forms/AddClient.vue"
</script>

<style>
</style>