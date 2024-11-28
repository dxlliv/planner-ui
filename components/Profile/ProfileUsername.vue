<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: "medium",
  },
)
</script>

<template>
  <div
    :class="[
      'app-profile__username',
      { 'font-weight-bold text-subtitle-2': size === 'medium' },
      { 'font-weight-bold text-subtitle-1': size === 'large' },
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-profile__username {
  position: relative;

  &.text-subtitle-1 {
    font-size: 25px !important;
  }

  :deep(a) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
