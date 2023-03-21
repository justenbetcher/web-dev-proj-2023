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
            <div v-else-if="post.exercise.name == 'Run' || post.exercise.name == 'Walk'">
                <p>Unit: {{ post.exercise.unit }}</p>
                <p>Distance: {{ post.exercise.distance }}</p>
            </div>
            <div v-else>
                <div v-for="movment in post.exercise.circuitArray">
                    <p>{{ movment }}</p>
                </div>
            </div>
            <p>Time: {{ post.exercise.time }} (min)</p>
            <p>{{  post.exercise.comment }}</p>
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