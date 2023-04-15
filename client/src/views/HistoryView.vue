<script setup lang="ts">
import type { Post, deletePost } from '@/model/post';
import { useSession, getUsers } from '../model/session';
import { ref } from 'vue';

const session = useSession();
const isActive = ref(false);

const history = ref<Post[]>([]);
getUsers().then((data) => {
    const index = data.data.findIndex(user => user.userId === session.user?.userId);
    history.value = data.data[index].postHistory ?? {} as Post[];
})

</script>

<template>
<div class="container">
    <h1 class="title">Your past Workouts</h1>
    <div class="edit-button">
        <button class="button is-transparent edit" @click="isActive = !isActive">
            <span>edit</span>
        </button>
    </div>

    <div class="columns" v-if="session.user != null">
        <div class="box" v-for="post, i in history.slice().reverse()">

            <div v-if="post.exercise.workoutType == 'Swim'">
                <p class="post-name"><bolder>{{ post.user }}</bolder> went for a swim today!</p>
                <img src="../assets/img/LogExerciseImg/swim.jpeg">
                <p><bold>PoolSize:</bold> {{ post.exercise.poolSize }} (meters)</p>
                <p><bold>Laps:</bold> {{ post.exercise.laps }}</p>
                <p><bold>Stroke:</bold> {{ post.exercise.stroke }}</p>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Walk'">
                <p class="post-user"><bolder>{{ post.user }}</bolder> went for a walk today!</p>
                <img src="../assets/img/LogExerciseImg/walk.jpeg">
                <p><bold>Unit:</bold> {{ post.exercise.unit }}</p>
                <p><bold>Distance:</bold> {{ post.exercise.distance }}</p>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Run'">
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
            <p class="date"><small>{{ post.date }}</small></p>

            <button class="button is-danger" v-bind:class="{ 'is-active': isActive }" @click="deletePost(i)">
                <span>X</span>
            </button>
        </div>
    </div>

    
</div>
    
</template>



<style scoped>
.columns{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
}
h1 {
    text-align: center;
}
.box{
    width: 30%;
    position: relative;
    overflow: visible;
    min-height: 525px;
    margin-right: 15px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
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
    margin-bottom: 25px;
    
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
.edit-button {
    position: absolute;
    top: 0;
    right: 0;
}
.date {
    position: absolute;
    bottom: 7px;
}
@media screen and (max-width: 1024px) {
    .box {
        min-width: 350px;
        margin: 15px;
    }
    .container {
        margin: 15px;
    }
}

@media screen and (max-width: 512px) {
    .columns {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .edit-button {
        position:static;
        display: flex;
        justify-content: right;
        width: 100%;
        margin-bottom: 15px;
    }
    
}

</style>