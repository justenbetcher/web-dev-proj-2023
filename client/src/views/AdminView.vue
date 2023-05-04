<script setup lang="ts">
    import { useSession } from '../model/session';
    import { getUsers, deleteUser, type User } from '../model/user';
    import { ref } from 'vue';

    const session = useSession();

    const users = ref<User[]>([]);

    getUsers()
        .then(x =>
        {
            users.value = x.data ?? [] as User[];
        });


</script>

<template>
    <h1 class="title">Users</h1>
    <div class="container" v-if="session.user?.role != 'admin'">
        <p>must be an admin to view this page</p>
    </div>
    <div class="container">
        <div class="box" v-for="user in users">
            <div class="name item">
                <p>user: {{ user.name }}</p>
            </div>
            <div class="email item">
                <p>email: {{ user.email }}</p>
            </div>
            <div class="id item">
                <p>id: {{ user._id }}</p>
            </div>
            <button class="button is-danger item" @click="deleteUser(user._id ?? '')">delete</button>
        </div>
        
    </div>
</template>



<style scoped>
    .box {
        display: flex;
        justify-content: space-between;
    }
    .item {
        display:inline-block;
        margin: none;
    }
    .container {
        min-height: 80vh;
    }
    h1 {
        text-align: center;
    }


</style>