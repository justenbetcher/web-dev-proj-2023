<script setup lang="ts">
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises } from '@/model/exercise';
import { makePost } from '@/model/post';

    const workout = useExercises();
    workout.value.exercise = {
        name: 'Run',
        unit: '',
        distance: 0,
        time: 0,
        poolSize: 0,
        laps: 0,
        stroke: '',
    }

    /*
    const unit = ref('');
    const distance = ref();
    const time = ref();

    const workout: Exercise = {
        name: 'Run',
        unit: unit.value,
        distance: distance.value,
        time: time.value,

    }
    */

</script>

<template>
    <LogExerciseView />

    <div class="box">
        <h1 class="title">Log Your Run!</h1>

        <p class="field">Distance</p>
        <div class="field">
            <div class="control">

                <label class="radio">
                    <input type="radio" name="answer" value="Miles" v-model="workout.exercise.unit">
                        Miles
                </label>

                <label class="radio">
                    <input type="radio" name="answer" value="Kilometer" v-model="workout.exercise.unit">
                        Kilometer
                </label>
            </div>
        </div>
        <div class="field">
            <input class="input" type="number" placeholder="Distance" v-model="workout.exercise.distance">
        </div>

        <p class="field">Time <small>(in minutes)</small></p>
        <div class="field">
            <input class="input" type="number" placeholder="Time" v-model="workout.exercise.time">
        </div>
    </div>

    <div class="field">
            <button class="button is-success submit" @click="makePost(workout.exercise)">
                <span>Post Your Workout</span>
            </button>
        </div>

    <br>
    <div><h1>Unit: {{ workout.exercise.unit }}, Distance: {{ workout.exercise.distance }}, Time: {{ workout.exercise.time }}</h1></div>
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
    .field.distance, .field.time{
        width: 40%;
    }
    .field > small{
        font-size: .65em;
    }
</style>