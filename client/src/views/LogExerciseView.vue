<script setup lang="ts">
    import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
<div class="container">

    <div class="columns">

        <!-- first column -->
        <div class="column">

                <!--<h1>RUNNING</h1>-->
                <RouterLink to="/exercise-run" class="box run">RUNNING</RouterLink>
            
                <RouterLink to="/exercise-swim" class="box swim">SWIMMING</RouterLink>
        </div>

        <!--second column -->
        <div class="column">

            <RouterLink to="/exercise-walk" class="box walk">WALKING</RouterLink>

            <RouterLink to="/exercise-weightTraining" class="box weight-training">WEIGHT TRAINING</RouterLink>

        </div>

        <!-- third column -->
        <div class="column">

            <RouterLink to="/exercise-hiit" class="box hiit">HIIT</RouterLink>

            <RouterLink to="/exercise-calistenics" class="box calistenics">CALISTENICS</RouterLink>

        </div>
    </div>
</div>

<div class="container">
    <RouterView />
</div>

</template>



<style scoped>
    *{
        box-sizing: border-box;
    }
    html, body{
        height: 100%;
    }
    body{
        margin: 0;
    }
    .container{
        margin-top: 15px;
    }
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 250px;
        color: white;
        font-weight: bolder;
        font-size: 2em;
        
    }
    .box.run{
        background-image: url('../assets/img/LogExerciseImg/run.jpeg');
    }
    .box.swim{
        background-image: url('../assets/img/LogExerciseImg/swim.jpeg');
    }
    .box.calistenics{
        background-image: url('../assets/img/LogExerciseImg/calistenics.jpeg');
    }
    .box.weight-training{
        background-image: url('../assets/img/LogExerciseImg/weight-training.jpeg');
    }
    .box.hiit{
        background-image: url('../assets/img/LogExerciseImg/hiit.webp');
    }
    .box.walk{
        background-image: url('../assets/img/LogExerciseImg/walk.jpeg');
    }
</style>