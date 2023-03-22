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
            <p>Jump right into it and post your first workout <RouterLink to='/exercise'>here</RouterLink></p>
        </div>
    </div>

</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/img/homebkg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
    color: white;
}
h1 {
    font-size: 2em;
}
p {
    font-size: 1.45em;
}



</style>