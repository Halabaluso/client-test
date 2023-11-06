<template>
  <div v-if="props.show" class="toast">
    <div class="alert" :class="props.css">
      <span>{{msg}}</span>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
        msg: String,
        css: String,
        show: Boolean
    })
</script>

<style>
</style>