<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavBar from './components/NavBar.vue'
    import Footer from './components/Footer.vue'
    import LogInView from './views/LogInView.vue'
    import { useSession } from './model/session'

    const session = useSession()
</script>

<template>

    <div v-if="session.user">
        <NavBar />

        <div class="container">

            <RouterView />

        </div>
        <Footer />
    </div>
    
    <div v-else>
        <LogInView />
    </div>

</template>

<style scoped>
    

</style>
