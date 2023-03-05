<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import LogExerciseView from '../LogExerciseView.vue';
</script>

<template>
    <LogExerciseView />

    <div class="box">
        <h1 class="title">Log Your Swim!</h1>

        <p class="field">Laps and Pool Size</p>
        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer">
                        25m
                </label>
                <label class="radio">
                    <input type="radio" name="answer">
                        50m
                </label>
            </div>
        </div>
        <div class="field">
            <input class="input" type="text" placeholder="Laps">
        </div>
        <p class="field">Time</p>
        <div class="field">
            <input class="input" type="text" placeholder="Time">
        </div>
        <p class="field">Stroke</p>
        <div class="field">
            <input class="input" type="text" placeholder="Stroke">
        </div>
    </div>
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