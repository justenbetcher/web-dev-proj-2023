<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import LogExerciseView from '../LogExerciseView.vue';
</script>

<template>
    <LogExerciseView />

    <div class="box">
        <h1 class="title">Log Your Walk!</h1>

        <p class="field">Distance</p>
        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer">
                        Miles
                </label>
                <label class="radio">
                    <input type="radio" name="answer">
                        Kilometers
                </label>
            </div>
        </div>
        <div class="field">
            <input class="input" type="text" placeholder="Distance">
        </div>

        <p class="field">Time</p>
        <div class="field">
            <input class="input" type="text" placeholder="Time">
        </div>
        <p class="field">Elevation</p>
        <div class="field">
            <input class="input" type="text" placeholder="Elevation">
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