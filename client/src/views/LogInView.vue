<script setup lang="ts">
import { ref } from 'vue';
import LogIn from '../components/LogIn.vue';
import SignUp from '../components/SignUp.vue';
import { useSession } from '@/model/session';

const session = useSession();

const isLogIn = ref(true);
const isActive = ref(true);
</script>


<template>

    <div class="bg-img"></div>

    <div class="container">
        <h1 class="has-text-primary">GIT FIT</h1>


        <div class="box">
            <div v-for="message in session.messages">{{ message.msg }}</div>
            <div class="field">
                <a v-bind:class="{ 'is-active': isLogIn }" href="#" @click="isLogIn = true">Log In</a>
                <a class="ml-2" v-bind:class="{ 'is-active': !isLogIn }" href="#" @click="isLogIn = false">Sign Up</a>
                <!--
                <RouterLink to='/login-login'>Log In</RouterLink>
                <RouterLink to='/login-signup'>   Sign Up</RouterLink>
                -->
            </div>
            <div v-if="isLogIn == true">
                <LogIn />
            </div>
            <div v-else>
                <SignUp />
            </div>
            

            <!--
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
            
            <div class="field">
                <p class="control">
                    <RouterLink to="/" class="button is-success" @click="login">
                        Login
                    </RouterLink>
                </p>
            </div>
            -->
        </div>
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
            background-color: black;
        }
        
        .container{
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100vh;
            width: 100%;
            flex-direction: column;
            position: absolute;
        }
        .has-text-primary{
            color: rgb(92, 210, 249) !important;
        }
        h1.has-text-primary{
            font-size: 7em;
            font-weight: bolder;
            /*text-shadow: 4px 4px 7px rgb(110, 110, 110);*/
        }
        .box{
            width: 50%;
            margin: 0;
        }

        .is-active {
            text-decoration: underline;
        }
        
        .is-success{
            background-color: rgb(30, 133, 30) !important;
        }
        .is-success:hover{
            background-color: rgb(87, 203, 16) !important;
        }
        @media screen and (max-width: 1024px){
          .box { 
              min-width: 450px;
          }
        }
        @media screen and (max-width: 512px){
          .box { 
              min-width: 90%;
          }
          h1.has-text-primary{
            font-size: 6em;
          }
        }
</style>

<style>
    
</style>