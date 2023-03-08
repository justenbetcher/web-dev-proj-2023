<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises, setSwim } from '../../model/exercise.ts'

const exercise = useExercises();
let size = true
let laps = 50
let time = 120
let stroke = 'butterfly'
setSwim(size, laps, time, stroke)
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
            <div class="dropdown is-active">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Stroke</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                            Free Style
                        </a>
                        <a class="dropdown-item">
                            Breast Stroke
                        </a>
                        <a href="#" class="dropdown-item is-active">
                            Butterfly
                        </a>
                        <a href="#" class="dropdown-item">
                            Back Stroke
                        </a>
                    </div>
                </div>
                </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div><h1>Test {{ exercise.swim.laps }}</h1></div>
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