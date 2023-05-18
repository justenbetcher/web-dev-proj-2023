<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import LogExerciseView from '../LogExerciseView.vue';
import { useExercises, resetExercise } from '@/model/exercise';
import { makePost } from '@/model/post';
import { searchUsers, type User } from '../../model/user';

    const workout = useExercises();
    resetExercise('Run');

    const searchTerm = ref('');

    const Array = ref<User[]>([]);

    

    const userArray  = computed(() => {
        console.log('hello')
        searchUsers(searchTerm.value)
        .then(data => {
            Array.value = data.data;
        })
        console.log(Array.value)
    })

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

        <div id="down" class="box" v-if="workout.exercise != null">
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

            <p class="field">Additional comments for your workout</p>
            <div class="field">
                <textarea type="text" class="textarea" placeholder="comments on your workout" v-model="workout.exercise.comment"></textarea>
            </div>

            <label for="label" class="label">
                Tag a Friend that you exercised with
            </label>
            <input type="text" class="input field" id="search" placeholder="search for a friend" v-model="searchTerm">

            <div class="field">
                <RouterLink to="/feed" class="button is-success submit" @click="makePost(workout.exercise)">
                    <span>Post Your Workout</span>
                </RouterLink>
            </div>

            <div>
                <h1>
                    Unit: {{ workout.exercise.unit }}, Distance: {{ workout.exercise.distance }}, 
                    Time: {{ workout.exercise.time }}, Comment: {{ workout.exercise.comment }}
                    SearchTerm: {{ searchTerm }}
                    <ol>
                        <li v-for="user in userArray" :key="user"> {{ user}}</li>
                    </ol>
                </h1>
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
    .field.distance, .field.time{
        width: 40%;
    }
    .field > small{
        font-size: .65em;
    }
</style>