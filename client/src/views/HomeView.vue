<script setup lang="ts">
import { useSession, lastWorkout } from '../model/session';
import { RouterLink, RouterView } from 'vue-router';


const session = useSession();
</script>

<template>
    <div class="container" v-if="session.user != null">
        <h1 class="title">Welcome, {{ session.user.name }}</h1>
        <div v-if="session.user.postHistory.length != 0">
            <p>your last workout was {{ lastWorkout() }} milliseconds ago</p>
        </div>
        <div v-else>
            <p>Jump right into it and post your first workout here</p>
        </div>
    </div>

</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

</style>