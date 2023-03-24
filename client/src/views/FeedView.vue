<script setup lang="ts">
import { useFeed } from '@/model/post';



const feed = useFeed();


</script>

<template>
    <h1 class="title">Feed Your Motivatoin</h1>
    <div class="container">
        

        <div class="box" v-for="post, i in feed">
            
            <div v-if="post.exercise.name == 'Swim'">
                <p class="post-name"><bolder>{{ post.user }}</bolder> went for a swim today!</p>
                <img src="../assets/img/LogExerciseImg/swim.jpeg">
                <p><bold>PoolSize:</bold> {{ post.exercise.poolSize }} (meters)</p>
                <p><bold>Laps:</bold> {{ post.exercise.laps }}</p>
                <p><bold>Stroke:</bold> {{ post.exercise.stroke }}</p>
            </div>

            <div v-else-if="post.exercise.name == 'Walk'">
                <p class="post-user"><bolder>{{ post.user }}</bolder> went for a walk today!</p>
                <img src="../assets/img/LogExerciseImg/walk.jpeg">
                <p><bold>Unit:</bold> {{ post.exercise.unit }}</p>
                <p><bold>Distance:</bold> {{ post.exercise.distance }}</p>
            </div>

            <div v-else-if="post.exercise.name == 'Run'">
                <p class="post-user"><bolder>{{ post.user }}</bolder> went for a run today!</p>
                <img src="../assets/img/LogExerciseImg/run.jpeg">
                <p><bold>Unit:</bold> {{ post.exercise.unit }}</p>
                <p><bold>Distance:</bold> {{ post.exercise.distance }}</p>
            </div>

            <div v-else>
                <p class="post-user"><bolder>{{ post.user }}</bolder> went to the gym today!</p>
                <img src="../assets/img/LogExerciseImg/weight-training.jpeg">
                <p><bold>Exercises/ Movments</bold></p>
                <ol>
                        <li v-for="movment in post.exercise.circuitArray">{{ movment }}</li>
                </ol>
            </div>
            <p><bold>Time:</bold> {{ post.exercise.time }} (min)</p>
            <p><bold>Comment:</bold></p>
            <p class="comment">{{ post.exercise.comment }}</p>
            
            <p class="date"><small>{{ post.date }}</small></p>
        </div>

    </div>
</template>



<style scoped>
h1 {
    text-align: center;
}
.container{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

}
.box{
    width: 40%;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    position: relative;
}
ol{
    margin-left: 40px;
}
p > bolder {
    font-weight: bolder;
    font-size: 1.35em;
}
p > bold {
    font-weight: bold;
}
p > small {
    font-size: .75em;
}
.comment {
    margin-left: 20px;
    margin-bottom: 25px;
}
.date {
    position: absolute;
    bottom: 7px;
}
@media screen and (max-width: 1024px) {
    .box {
        min-width: 350px
    }
    .comment {
        margin-bottom: 50px;
    }
}

</style>