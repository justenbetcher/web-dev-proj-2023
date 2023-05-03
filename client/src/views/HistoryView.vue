<script setup lang="ts">
import type { Post } from '@/model/post';
import { useSession } from '../model/session';
import { getHistory } from '../model/user';
import { ref } from 'vue';
import SwimPost from '@/components/SwimPost.vue';
import WalkPost from '@/components/WalkPost.vue';
import RunPost from '@/components/RunPost.vue';
import WeightPost from '@/components/WeightPost.vue';

const session = useSession();
const isActive = ref(false);
const history = ref<Post[]>([])

getHistory()
    .then(data => {
        history.value = data.data ?? [] as Post[];
    })

</script>

<template>
<h1 class="title">Your past Workouts</h1>
<div class="container">
    
    <div class="edit-button">
        <button class="button is-transparent edit" @click="isActive = !isActive">
            <span>edit</span>
        </button>
    </div>

    <div class="history-container" v-if="session.user != null">
        <div class="post" v-for="post, i in history">
            
            <div v-if="post.exercise.workoutType == 'Swim'">
                
                <SwimPost>
                    <template #user>{{ post.user }}</template>
                    <template #poolSize>{{ post.exercise.poolSize }}</template>
                    <template #laps>{{ post.exercise.laps }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </SwimPost>
                
            </div>

            <div v-else-if="post.exercise.workoutType == 'Walk'">
                <WalkPost>
                    <template #user>{{ post.user }}</template>
                    <template #unit>{{ post.exercise.unit }}</template>
                    <template #distance>{{ post.exercise.distance }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </WalkPost>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Run'">
                <RunPost>
                    <template #user>{{ post.user }}</template>
                    <template #unit>{{ post.exercise.unit }}</template>
                    <template #distance>{{ post.exercise.distance }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </RunPost>
            </div>

            <div v-else>
                <WeightPost>
                    <template #user>{{ post.user }}</template>
                    <template #circuit>
                        <li v-for="movment in post.exercise.circuitArray">{{ movment }}</li>
                    </template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </WeightPost>
            </div>

            <button class="button is-danger" v-bind:class="{ 'is-active': isActive }">
                <span>X</span>
            </button>
            
        </div>
            
        
    </div>

    
</div>
    
</template>



<style scoped>
.history-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
}
h1 {
    text-align: center;
}
.post{
    width: 30%;
    position: relative;
    margin-right: 8px;
    display: flex;
    height: 550px;
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
    .post {
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