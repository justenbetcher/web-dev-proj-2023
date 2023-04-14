<script setup lang="ts">
import { ref } from 'vue';



const name = ref('');
</script>

<template>

    <div class="field">
        <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Name" v-model="name">
        <span class="icon is-small is-left">
            <i class="fas fa-person"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
        </span>
        </p>
    </div>

    <div class="field">
        <p class="control has-icons-left">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        </p>
    </div>
    
    <div class="field">
        <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
        </p>
    </div>

    <div class="field">
        <RouterLink to='/login' class="button is-success submit" >
            <span>Create Account</span>
        </RouterLink>
    </div>
    <!--
    <div><h1>name: {{ name }} </h1></div>
    -->
</template>



<style scoped>

</style>