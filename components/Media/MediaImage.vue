<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<template>
  <v-img
    cover height="100%"
    :src="src"
  />
</template>
