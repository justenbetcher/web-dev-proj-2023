<script setup lang="ts">
import { getFeed, type Post, type useFeed } from '@/model/post';
import { ref } from 'vue';



const feed = ref<Post[]>([]);
getFeed().then((data) => {
    feed.value = data.data;
})

const isMore = ref(false);


</script>

<template>
    <h1 class="title">Feed Your Motivatoin</h1>
    <div class="container">
        

        <div class="box" v-for="post, i in feed">
            
            <div v-if="post.exercise.workoutType == 'Swim'">
                <p class="post-name"><bolder>{{ post.user }}</bolder> went for a swim today!</p>
                <img src="../assets/img/LogExerciseImg/swim.jpeg">
                <div class="info" v-bind:class="{ more: isMore }">
                    <p><bold>PoolSize:</bold> {{ post.exercise.poolSize }} (meters)</p>
                    <p><bold>Laps:</bold> {{ post.exercise.laps }}</p>
                    <p><bold>Stroke:</bold> {{ post.exercise.stroke }}</p>
                    <p><bold>Time:</bold> {{ post.exercise.time }} (min)</p>
                    <p><bold>Comment:</bold></p>
                    <p class="comment">{{ post.exercise.comment }}</p>

                    <button class="button is-dark need-more" v-bind:class="{ more : isMore }" @click="isMore = !isMore">
                        <span>... more</span>
                    </button>
                    
                    <button class="button is-dark need-less" v-if="isMore == true" @click="isMore = !isMore">
                        <span>... less</span>
                    </button>
                </div>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Walk'">
                <p class="post-user"><bolder>{{ post.user }}</bolder> went for a walk today!</p>
                <img src="../assets/img/LogExerciseImg/walk.jpeg">
                <div class="info" v-bind:class="{ more: isMore }">
                    <p><bold>Unit:</bold> {{ post.exercise.unit }}</p>
                    <p><bold>Distance:</bold> {{ post.exercise.distance }}</p>
                    <p><bold>Time:</bold> {{ post.exercise.time }} (min)</p>
                    <p><bold>Comment:</bold></p>
                    <p class="comment">{{ post.exercise.comment }}</p>

                    <button class="button is-dark need-more" v-bind:class="{ more : isMore }" @click="isMore = !isMore">
                        <span>... more</span>
                    </button>
                    
                    <button class="button is-dark need-less" v-if="isMore == true" @click="isMore = !isMore">
                        <span>... less</span>
                    </button>
                </div>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Run'">
                <p class="post-user"><bolder>{{ post.user }}</bolder> went for a run today!</p>
                <img src="../assets/img/LogExerciseImg/run.jpeg">
                <div class="info" v-bind:class="{ more: isMore }">
                    <p><bold>Unit:</bold> {{ post.exercise.unit }}</p>
                    <p><bold>Distance:</bold> {{ post.exercise.distance }}</p>
                    <p><bold>Time:</bold> {{ post.exercise.time }} (min)</p>
                    <p><bold>Comment:</bold></p>
                    <p class="comment">{{ post.exercise.comment }}</p>

                    <button class="button is-dark need-more" v-bind:class="{ more : isMore }" @click="isMore = !isMore">
                        <span>... more</span>
                    </button>
                    
                    <button class="button is-dark need-less" v-if="isMore == true" @click="isMore = !isMore">
                        <span>... less</span>
                    </button>
                </div>
            </div>

            <div v-else>
                <p class="post-user"><bolder>{{ post.user }}</bolder> went to the gym today!</p>
                <img src="../assets/img/LogExerciseImg/weight-training.jpeg">
                <div class="info" v-bind:class="{ more : isMore }">
                    <p><bold>Exercises/ Movments</bold></p>
                    <ol>
                            <li v-for="movment in post.exercise.circuitArray">{{ movment }}</li>
                    </ol>
                    <p><bold>Time:</bold> {{ post.exercise.time }} (min)</p>
                    <p><bold>Comment:</bold></p>
                    <p class="comment">{{ post.exercise.comment }}</p>

                    <button class="button is-dark need-more" v-bind:class="{ more : isMore }" @click="isMore = !isMore">
                        <span>... more</span>
                    </button>

                    <button class="button is-dark need-less" v-if="isMore == true" @click="isMore = !isMore">
                        <span>... less</span>
                    </button>
                    
                </div>
            </div>
            
            
            <p class="date"><small>{{ post.date }}</small></p>
        </div>

    </div>
</template>



<style scoped>
h1 {
    text-align: center;
}
.container{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

}
.box{
    width: 40%;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    position: relative;
}
ol{
    margin-left: 40px;
}
p > bolder {
    font-weight: bolder;
    font-size: 1.35em;
}
p > bold {
    font-weight: bold;
}
p > small {
    font-size: .75em;
}
.comment {
    margin-left: 20px;
    margin-bottom: 35px;
}
.date {
    position: absolute;
    bottom: 7px;
}
@media screen and (max-width: 1024px) {
    .box {
        min-width: 350px
    }
    
}
.info{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 200px;
    overflow-y: hidden;
    overflow-x: wrap;
    background-image: linear-gradient(white, white, white, white, white, rgba(0, 0, 0, 0.196));
    position: relative;
    margin-bottom: 30px;
}
.button.need-more, button.need-less {
    position: absolute;
    bottom: 5px;
    right: 5px;
    height: 25px;
    font-size: .85em;
}

.button.more{
    display: none;
}

.info.more{
    max-height: none;
    background-image: none;
}

</style>