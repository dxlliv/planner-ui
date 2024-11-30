<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer
    class="app-navigation-drawer"
    :permanent="$vuetify.display.smAndUp"
    :rail="$vuetify.display.mdAndDown"
    :width="300"
    :rail-width="98"
  >
    <v-list density="compact" nav>
      <slot />
    </v-list>

    <v-list density="compact" nav class="app-navigation-drawer__actions">
      <slot name="actions" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.app-navigation-drawer {
  position: fixed !important;
  background: none;
  display: grid;
  align-content: center;

  &__actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>