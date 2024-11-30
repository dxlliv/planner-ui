<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    size?: string
  }>(),
  {
    size: "medium",
  },
)
</script>

<template>
  <nuxt-link
    :class="['app-logo', `app-logo--size-${size}`]"
    v-text="title"
  />
</template>

<style scoped lang="scss">
.app-logo {
  display: inline-block;
  text-decoration: none;
  color: inherit;

  &--size-large {
    font-size: 48px;
  }
}
</style>
