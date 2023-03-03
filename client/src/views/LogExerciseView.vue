<script setup lang="ts">
    import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
<div class="container">

    <div class="columns">

        <!-- first column -->
        <div class="column">

                <!--<h1>RUNNING</h1>-->
                <RouterLink to="/exercise-run" class="box">RUNNING</RouterLink>
            
                <RouterLink to="/exercise-swim" class="box">SWIMMING</RouterLink>
        </div>

        <!--second column -->
        <div class="column">

            <RouterLink to="/exercise-walk" class="box">WALKING</RouterLink>

            <RouterLink to="/exercise-weightTraining" class="box">WEIGHT TRAINING</RouterLink>

        </div>

        <!-- third column -->
        <div class="column">

            <RouterLink to="/exercise-hiit" class="box">Hight Intensity Interval Training</RouterLink>

            <RouterLink to="/exercise-calistenics" class="box">CALISTENICS</RouterLink>

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
    .column > .box{
        text-align: center;
    }
</style>