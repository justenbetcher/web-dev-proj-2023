<script setup lang="ts">
import { useFeed } from '@/model/post';



const feed = useFeed();


</script>

<template>
    <div class="container">
        <h1 class="title">Feed Your Motivatoin</h1>

        <div class="box" v-for="post, i in feed">
            <p class="post-name">{{ post.user }}</p>
            
            <div v-if="post.exercise.name == 'Swim'">
                <p>PoolSize: {{ post.exercise.poolSize }} (meters)</p>
                <p>Laps: {{ post.exercise.laps }}</p>
                <p>Stroke: {{ post.exercise.stroke }}</p>
            </div>
            <div v-else>
                <p>Unit: {{ post.exercise.unit }}</p>
                <p>Distance: {{ post.exercise.distance }}</p>
            </div>
            <p>Time: {{ post.exercise.time }} (min)</p>
            <p>{{ post.date }}</p>
            <p>{{ post.postID }}</p>
        </div>

    </div>
</template>



<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.box{
    width: 40%;
}

</style>