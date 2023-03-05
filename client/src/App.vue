<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import NavBar from './components/NavBar.vue'
    import LogInView from './views/LogInView.vue'
    import { useSession, login } from './model/session.ts'

    const session = useSession()
</script>

<template>
    
    <div v-if="session.user">
        <NavBar />

        <div class="container">

            <RouterView />

        </div>
    </div>
    
    <div v-else>
        <LogInView />
    </div>

</template>

<style scoped>
    

</style>
