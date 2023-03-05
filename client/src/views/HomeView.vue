<script setup lang="ts">
import { useSession } from '../model/session.ts'

const session = useSession();
</script>

<template>
    <h1>Welcome {{ session.user.name }}</h1>
</template>


<style scoped>

</style>