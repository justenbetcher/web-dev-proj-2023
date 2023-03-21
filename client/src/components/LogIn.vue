<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { login, useUserArray, newAccout } from '../model/session';
import { ref } from 'vue';

const userArray = useUserArray();
const isActive = ref(false);


</script>

<template>
    <div class="field">
        <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
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
    

    <div class="dropdown" v-bind:class="{ 'is-active' : isActive }" @click="isActive = !isActive">
        <div class="dropdown-trigger">
            <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Log In</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <RouterLink to='/' href="#" class="dropdown-item" v-for="user, i in userArray" @click="login(i)">
                    {{ user.name }}
                </RouterLink>
            </div>
        </div>
    </div>
    <!--
    <div class="field">
        <div class="select">
            <select class="select">
                <option>
                    <RouterLink to="/" class="button is-success" @click="login">
                        Login
                    </RouterLink>
                </option>
            </select>
        </div>
    </div>
    -->
</template>



<style scoped>

</style>