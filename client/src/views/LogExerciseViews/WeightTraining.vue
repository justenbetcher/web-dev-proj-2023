<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises, resetExercise, enterCircuit } from '../../model/exercise';
import { makePost } from '@/model/post';
import { ref } from 'vue';

    const workout = useExercises();
    const movments = ref('');
    resetExercise('Gym');
</script>

<template>
    <LogExerciseView />
    <div class="box">
        <h1 class="title">Log your gym workout</h1>

        <p class="field">Enter Movments <small>(after each movment press enter)</small></p>
        <div class="field">
            <textarea type="text" class="textarea" placeholder="enter movments here" v-model="movments"></textarea>
        </div>

        <p class="field">Time <small>(in minutes)</small></p>
        <div class="field">
            <input class="input" type="text" placeholder="Time" v-model.number="workout.exercise.time">
        </div>

        <p class="field">Additional comments for your workout</p>
        <div class="field">
            <textarea type="text" class="textarea" placeholder="comments on your workout" v-model="workout.exercise.comment"></textarea>
        </div>

        <div class="field">
            <button class="button is-success submit" @click="enterCircuit(movments); makePost(workout.exercise); movments = ''">
                <span>Post Your Workout</span>
            </button>
        </div>
    </div>
</template>



<style scoped>
.box {
    display: flex;
    flex-direction: column;
}
.box > h1 {
    text-align: center;
}
.field > small {
    font-size: .65em;
}
</style>