<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import NavBar from './components/NavBar.vue';

    let obj:any = {
        
    }
</script>

<template>
    <NavBar />

    <div class="container">

        <RouterView />

    </div>

</template>

<style scoped>
    

</style>
