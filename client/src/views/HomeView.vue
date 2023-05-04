<script setup lang="ts">
import { useSession, lastWorkout } from '../model/session';
import type { Post } from '@/model/post';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const session = useSession();

function getLastWorkout() {
    const date = (new Date().valueOf());
    const last = (session.user?.postHistory ? session.user.postHistory[session.user.postHistory.length-1].date : 0);
    
    return date - last;
}
</script>

<template>
    <div class="container" >
        <div v-if="session.user?.postHistory == undefined">
            <p>You haven't posted any workouts yet. Get started <a @click="router.push('/exercise')">here</a></p>
        </div>
        <div v-else>
            <p>Your last workout was {{ getLastWorkout() }} milliseconds</p>
        </div>
    </div>
</template>


<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/img/homebkg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position: center;
    color: white;
}
h1 {
    font-size: 2em;
}
p {
    font-size: 1.45em;
}
</style>