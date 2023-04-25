<script setup lang="ts">
import { ref } from 'vue';

const isMore = ref(false);

</script>

<template>
        <div class="box">
            <p><bolder><slot name="user" /></bolder> went for a swim today!</p>
                <img src="../assets/img/LogExerciseImg/swim.jpeg">
                <div class="info" v-bind:class="{ more: isMore }">
                    <p><bold>PoolSize:</bold> <slot name="poolSize" /> (meters)</p>
                    <p><bold>Laps:</bold> <slot name="laps" /></p>
                    <p><bold>Stroke:</bold> <slot name="stroke" /></p>
                    <p><bold>Time:</bold> <slot name="time" /> (min)</p>
                    <p><bold>Comment:</bold></p>
                    <p class="comment"><slot name="comment" /></p>

                    <button class="button is-dark need-more" v-bind:class="{ more : isMore }" @click="isMore = !isMore">
                        <span>... more</span>
                    </button>
                    
                    <button class="button is-dark need-less" v-if="isMore == true" @click="isMore = !isMore">
                        <span>... less</span>
                    </button>
                </div>

            <p class="date"><small><slot name="date" /></small></p>
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