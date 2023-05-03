<script setup lang="ts">
import { useSession, lastWorkout } from '../model/session';
import { RouterLink } from 'vue-router';


const session = useSession();
</script>

<template>
    <div class="container" >
        
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