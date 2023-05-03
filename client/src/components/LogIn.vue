<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { useLogin, useSession } from '../model/session';

const router = useRouter();
console.log(router);




const email = ref('');
const password = ref('');
const session = useSession();

console.log(session.user);

</script>

<template>
    <div class="field">
        <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="email">
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
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
        </p>
    </div>
    

    
        
    <button class="button is-success"  @click="useLogin(email, password); useRouter().push('/exercise')">
        <span>Log In</span>
    </button>
        
</template>



<style scoped>

</style>