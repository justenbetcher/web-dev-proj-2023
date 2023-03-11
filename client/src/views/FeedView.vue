<script setup lang="ts">
import { useFeed } from '@/model/post';
import type { Swim } from '../model/exercise';


const feed = useFeed();
</script>

<template>
    <div class="container">
        <h1 class="title">Feed Your Motivatoin</h1>

        <div class="box" v-for="post, i in feed">
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