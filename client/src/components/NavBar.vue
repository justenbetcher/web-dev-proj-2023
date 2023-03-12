<script setup lang="ts">
    import {RouterLink, RouterView} from 'vue-router';
    import { useSession, login } from '../model/session';

    const session = useSession()
</script>

<template>

    <nav class="navbar is-transparent">
        <div class="navbar-brand">

            <a class="navbar-item" href="#">
                <h2>Git Fit</h2>
            </a>

            <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">

                <RouterLink to="/" class="navbar-item">Home</RouterLink>
                
                <RouterLink to="/exercise" class="navbar-item">Log Exercise</RouterLink>

                <RouterLink to="/friends" class="navbar-item">Friends</RouterLink>

                <RouterLink to="/history" class="navbar-item">History</RouterLink>

                <RouterLink to="/feed" class="navbar-item">Feed</RouterLink>

            </div>
        </div>
    
        <div class="navbar-end">
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
