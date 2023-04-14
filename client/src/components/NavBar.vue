<script setup lang="ts">
    import {RouterLink, RouterView} from 'vue-router';
    import { useSession } from '../model/session';
    import { ref } from 'vue';

    const session = useSession()
    const isActive = ref(false);
</script>

<template>

    <nav class="navbar is-transparent" v-if="session.user != null">
        <div class="navbar-brand">

            <a class="navbar-item" href="#">
                <h2>Git Fit</h2>
            </a>

            <div class="navbar-burger" v-bind:class="{ 'is-active': isActive }" @click="isActive = !isActive">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    
        <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
            <div class="navbar-start">

                <RouterLink to="/" class="navbar-item">Home</RouterLink>
                
                <RouterLink to="/exercise" class="navbar-item">Log Exercise</RouterLink>

                <RouterLink to="/history" class="navbar-item">History</RouterLink>

                <RouterLink to="/feed" class="navbar-item">Feed</RouterLink>

            </div>
        
    
            <div class="navbar-end">
                <p class="navbar-item">{{ session.user.name }}</p>
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <RouterLink to='/login' class="button is-primary" href="#" @click="session.user = null">
                                <span class="icon">
                                    <i class="fas fa-right-from-bracket"></i>
                                </span>
                                <span>Log Out</span>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
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
    .navbar-item > h2{
        font-size: xx-large;
        font-weight: bolder;
    }
    .navbar-end{
        margin-right: 10px;
    }
</style>
