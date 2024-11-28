<script setup lang="ts">
defineProps<{
  count: number
  text: string
}>()
</script>

<template>
  <li>
    <b v-text="count" />
    <span class="ml-2" v-text="text" />
  </li>
</template>

<style scoped lang="scss">
span {
  opacity: 0.8;
}
</style>