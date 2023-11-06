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
              <li><a>Añadir clientes</a></li>
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
            <summary><i class="fa-solid fa-person-chalkboard"></i> Clientes</summary>
            <ul class="p-2">
              <li class="w-max"><a>Añadir clientes</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Cerrar sesion</a>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>