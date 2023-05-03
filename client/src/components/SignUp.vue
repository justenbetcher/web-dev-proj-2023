<script setup lang="ts">
import { ref } from 'vue';
import { addUser, type User } from '../model/user';


const newUser = ref<User>({
    name: '',
    email: '',
    password: '',
})

</script>

<template>

    <div class="field">
        <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Name" v-model="newUser.name">
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
        <input class="input" type="email" placeholder="Email" v-model="newUser.email">
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        </p>
    </div>
    
    <div class="field">
        <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="newUser.password">
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
        </p>
    </div>

    <div class="field">
        <RouterLink to='/login' class="button is-success submit" @click="addUser(newUser)">
            <span>Create Account</span>
        </RouterLink>
    </div>
    <!--
    <div><h1>name: {{ name }} </h1></div>
    -->
</template>



<style scoped>

</style>