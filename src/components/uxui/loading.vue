<template>
    <div class="vl-parent">
        <loading v-model:active="props.isLoading"
                 :can-cancel="false"
                 :is-full-page="true"/>
    </div>
</template>

<script setup>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';
    const props = defineProps({
        isLoading: Boolean
    })
</script>