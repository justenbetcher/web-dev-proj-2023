<script setup lang="ts">
import LogExerciseView from '../LogExerciseView.vue';
import  { useExercises, resetExercise } from '../../model/exercise';
import { makePost } from '@/model/post';

    
    const workout = useExercises();
    resetExercise('Swim');

</script>

<template>
    <LogExerciseView />
    <div class="box">
        <h1 class="title">Log Your Swim!</h1>

        <!-- PoolSize input field -->
        <p class="field">Pool Size</p>
        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer" value="25" v-model.number="workout.exercise.poolSize">
                        25m
                </label>
                <label class="radio">
                    <input type="radio" name="answer" value="50" v-model.number="workout.exercise.poolSize">
                        50m
                </label>
            </div>
        </div>

        <!-- Laps input feild -->
        <p class="field">Laps</p>
        <div class="field">
            <input class="input" type="text" placeholder="Laps" v-model.number="workout.exercise.laps">
        </div>

        <!-- Time input field-->
        <p class="field">Time <small>(in minutes)</small></p>
        <div class="field">
            <input class="input" type="text" placeholder="Time" v-model.number="workout.exercise.time">
        </div>

        <!-- Stroke input Feild -->
        <p class="field">Stroke</p>
        <div class="field">
            <div class="select">            
                <select v-model.string="workout.exercise.stroke">
                    <option disabled value="">choose stroke</option>
                    <option value="Butterfly">Butterfly</option>
                    <option value="Freestyle">FreeStyle</option>
                    <option value="Back Stroke">Back Stroke</option>
                    <option value="Breast Stroke">Breast Stroke</option>
                </select>
            </div>
        </div>

        <p class="field">Additional comments for your workout</p>
        <div class="field">
            <textarea type="text" class="textarea" placeholder="comments on your workout" v-model="workout.exercise.comment"></textarea>
        </div>

        <div class="field">
            <button class="button is-success submit" @click="makePost(workout.exercise)">
                <span>Post Your Workout</span>
            </button>
        </div>

    </div>
    <br>
    
    
    <div><h1>Pool Size: {{ workout.exercise.poolSize }}, Laps: {{ workout.exercise.laps }},
        Time: {{ workout.exercise.time }}, Stroke: {{ workout.exercise.stroke }}, Comment: {{ workout.exercise.comment }}</h1></div>
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
    .select{
        width: 160px;
    }
    .field > small{
        font-size: .65em;
    }
    
</style>

