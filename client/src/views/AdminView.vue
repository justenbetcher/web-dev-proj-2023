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
    <div class="container" v-if="session.user?.role != 'admin'">
        <p>must be an admin to view this page</p>
    </div>
    <div class="container">
        <div class="box" v-for="user in users">
            <div class="name">
                <p>{{ user.name }}</p>
            </div>
            <div class="email">
                <p>{{ user.email }}</p>
            </div>
            <div class="id">
                <p>{{ user._id }}</p>
            </div>
            <div class="role">
                <p>{{ user.role }}</p>
            </div>
            <button class="button is-danger" @click="deleteUser(user._id ?? '')">delete</button>
        </div>
        
    </div>
</template>



<style scoped>

</style>