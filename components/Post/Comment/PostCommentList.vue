<script setup lang="ts">
</script>

<template>
  <div class="app-post-comment-list">
    <v-divider class="ma-0" />
    <slot>
      <v-row no-gutters class="text-center fill-height">
        <v-col align-self="center" v-text="$t('profile.post.comment.list.empty')" />
      </v-row>
    </slot>
    <v-divider class="ma-0" />
  </div>
</template>

<style scoped lang="scss">

</style>
