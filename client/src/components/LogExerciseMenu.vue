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
            
            <div id="swimming" class="box">
                <h1>SWIMMING</h1>
            </div>
        </div>

        <!--second column -->
        <div class="column">
            <div id="walking" class="box">
                <h1>WALKING</h1>
            </div>
            <div id="weight-training" class="box">
                <h1>WEIGHT TRAINING</h1>
            </div>
        </div>

        <!-- third column -->
        <div class="column">
            <div id="hiit" class="box">
                <h1>HIGH INTENSITY INTERVAL TRAINING</h1>
            </div>
            <div id="calistenics" class="box">
                <h1>CALISTENICS</h1>
            </div>
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