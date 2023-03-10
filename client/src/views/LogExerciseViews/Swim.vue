<script setup lang="ts">
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises, setSwim } from '../../model/exercise';

    const exercise = useExercises();
    setSwim(0,0,0,'');

</script>

<template>
    <LogExerciseView />
    <div id="swim" class="box">
        <h1 class="title">Log Your Swim!</h1>

        <!-- PoolSize input field -->
        <p class="field">Pool Size</p>
        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer" value="25" v-model.number="exercise.swim.poolSize">
                        25m
                </label>
                <label class="radio">
                    <input type="radio" name="answer" value="50" v-model.number="exercise.swim.poolSize">
                        50m
                </label>
            </div>
        </div>

        <!-- Laps input feild -->
        <p class="field">Laps</p>
        <div class="field">
            <input class="input" type="text" placeholder="Laps" v-model.number="exercise.swim.laps">
        </div>

        <!-- Time input field-->
        <p class="field">Time <small>(in minutes)</small></p>
        <div class="field">
            <input class="input" type="text" placeholder="Time" v-model.number="exercise.swim.time">
        </div>

        <!-- Stroke input Feild -->
        <p class="field">Stroke</p>
        <div class="select">            
            <select v-model.string="exercise.swim.stroke">
                <option disabled value="">choose stroke</option>
                <option value="Butterfly">Butterfly</option>
                <option value="Freestyle">FreeStyle</option>
                <option value="Back Stroke">Back Stroke</option>
                <option value="Breast Stroke">Breast Stroke</option>
            </select>
        </div>

    </div>
    <br>
    <br>
    <br>
    <div id="end"></div>
    
    <div><h1>Pool Size: {{ exercise.swim.poolSize }}, Laps: {{ exercise.swim.laps }},
        Time: {{ exercise.swim.time }}, Stroke: {{ exercise.swim.stroke }}</h1></div>
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