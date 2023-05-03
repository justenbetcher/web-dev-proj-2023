<script setup lang="ts">
    import { RouterView, routeLocationKey } from 'vue-router'
    import NavBar from './components/NavBar.vue'
    import Footer from './components/Footer.vue'
    import { useSession } from './model/session'
    import { useRouter } from 'vue-router';

    const session = useSession();
    const router = useRouter();

    if(!session.user) {
        router.push('/login');
    }

</script>

<template>

    <div v-if="session.user">
        <NavBar />
    </div>

        <div>
            <RouterView />
        </div>

    <div v-if="session.user">
        <Footer />
    </div>
    
</template>

<style scoped>
    

</style>
