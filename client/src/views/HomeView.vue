<script setup lang="ts">
import { useSession } from '../model/session'

const session = useSession();
</script>

<template>
    <div v-if="session.user">
        <h1>Welcome {{ session.user.name }}</h1>
    </div>

</template>


<style scoped>

</style>