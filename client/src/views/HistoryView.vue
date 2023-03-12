<script setup lang="ts">
import { useSession } from '../model/session';

const currentUser = useSession();

</script>

<template>
    <div class="container">
        <h1 class="title">Your past Workouts</h1>

        <div class="box" v-for="post, i in currentUser.user.postHistory">
            <p>{{ post.user }} exercised</p>
            
            <p>{{ post.exercise }}</p>
            
            <p>{{ post.date }}</p>
        </div>

    </div>
</template>



<style scoped>
.conatainer{
    display: flex;
    flex-direction: row;
}

</style>