<script setup lang="ts">
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises, setRunWalk } from '@/model/exercise';
import { makePost } from '@/model/post';

    const exercise = useExercises();

    setRunWalk('',0,0,0);
</script>

<template>
    <LogExerciseView />

    <div class="box">
        <h1 class="title">Log Your Run!</h1>

        <p class="field">Distance</p>
        <div class="field">
            <div class="control">

                <label class="radio">
                    <input type="radio" name="answer" value="Miles" v-model="exercise.run.unit">
                        Miles
                </label>

                <label class="radio">
                    <input type="radio" name="answer" value="Kilometer" v-model="exercise.run.unit">
                        Kilometer
                </label>
            </div>
        </div>
        <div class="field">
            <input class="input" type="text" placeholder="Distance" v-model="exercise.run.distance">
        </div>

        <p class="field">Time</p>
        <div class="field">
            <input class="input" type="text" placeholder="Time" v-model="exercise.run.time">
        </div>
    </div>

    <div class="field">
            <button class="button is-success submit" @click="makePost(exercise.run)">
                <span>Post Your Workout</span>
            </button>
        </div>

    <br>
    <div><h1>Unit: {{ exercise.run.unit }}, Distance: {{ exercise.run.distance }}, Time: {{ exercise.run.time }}</h1></div>
</template>



<style scoped>
    .box{
        display: flex;
        flex-direction: column;
    }
    .box > h1{
        text-align: center;
    }
    .box > p{
        font-size: 1.25em;
    }
</style>