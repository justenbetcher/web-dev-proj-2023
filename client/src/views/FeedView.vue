<script setup lang="ts">
    import SwimPost from '../components/SwimPost.vue';
    import WalkPost from '../components/WalkPost.vue';
    import RunPost from '@/components/RunPost.vue';
    import WeightPost from '@/components/WeightPost.vue';
    import { getFeed, type Post, type useFeed } from '@/model/post';
    import { ref } from 'vue';



    const feed = ref<Post[]>([]);
    getFeed().then((data) => {
        feed.value = data.data ?? [] as Post[];
    })

    const isMore = ref(false);


</script>

<template>
    <h1 class="title">Feed Your Motivatoin</h1>
    <div class="container">
        <div class="post" v-for="post, i in feed">
            
            <div v-if="post.exercise.workoutType == 'Swim'">
                
                <SwimPost>
                    <template #user>{{ post.user }}</template>
                    <template #poolSize>{{ post.exercise.poolSize }}</template>
                    <template #laps>{{ post.exercise.laps }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </SwimPost>
                
            </div>

            <div v-else-if="post.exercise.workoutType == 'Walk'">
                <WalkPost>
                    <template #user>{{ post.user }}</template>
                    <template #unit>{{ post.exercise.unit }}</template>
                    <template #distance>{{ post.exercise.distance }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </WalkPost>
            </div>

            <div v-else-if="post.exercise.workoutType == 'Run'">
                <RunPost>
                    <template #user>{{ post.user }}</template>
                    <template #unit>{{ post.exercise.unit }}</template>
                    <template #distance>{{ post.exercise.distance }}</template>
                    <template #time>{{ post.exercise.time }}</template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </RunPost>
            </div>

            <div v-else>
                <WeightPost>
                    <template #user>{{ post.user }}</template>
                    <template #circuit>
                        <li v-for="movment in post.exercise.circuitArray">{{ movment }}</li>
                    </template>
                    <template #comment>{{ post.exercise.comment }}</template>
                    <template #date>{{ post.date }}</template>
                </WeightPost>
            </div>
            
        </div>
    </div>
</template>



<style scoped>

    .container{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    
    .post {
        width: 400px;
        display: flex;
    }

    @media screen and (max-width: 1024px) {
        .post {
            min-width: 350px
        }
    }
    h1 {
        text-align: center;
    }

</style>