<script setup lang="ts">
</script>

<template>
  <div class="app-post-comment-list overflow-y-auto">
    <slot>
      <v-row no-gutters class="text-center fill-height">
        <v-col align-self="center" v-text="$t('profile.post.comment.list.empty')" />
      </v-row>
    </slot>
    <v-divider class="ma-0" />
  </div>
</template>

<style scoped lang="scss">
.app-post-comment-list {

}
</style>
