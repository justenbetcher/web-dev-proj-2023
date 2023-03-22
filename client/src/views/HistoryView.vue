<script setup lang="ts">
import { deletePost } from '@/model/post';
import { useSession } from '../model/session';
import { ref } from 'vue';

const session = useSession();
const isActive = ref(false);

</script>

<template>

    <h1 class="title">Your past Workouts</h1>

    <div class="columns" v-if="session.user != null">
        <div class="box" v-for="post, i in session.user.postHistory">
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
            <br>
            <p><small>{{ post.date }}</small></p>

            <button class="button is-danger" v-bind:class="{ 'is-active': isActive }" @click="deletePost(i)">
                <span>X</span>
            </button>
        </div>
    </div>

    <button class="button is-transparent edit" @click="isActive = !isActive">
        <span>edit</span>
    </button>
    
</template>



<style scoped>
.columns{
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
}
.box{
    width: 30%;
    position: relative;
    overflow:visible;
    margin-right: 15px;
    height: 500px;
}
img {
    height: 250px;
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
    
}

button.is-danger {
    display: none;
    border-radius: 50%;
    font-size: .75em;
    position: absolute;
    top: -10px;
    left: -10px;
    box-shadow: 2px 2px 7px rgba(10, 10, 10, 0.75);
}
.button.is-danger.is-active {
    display: block;
}
.button.edit {
    position: absolute;
    top: 0;
    right: 0;
}

</style>