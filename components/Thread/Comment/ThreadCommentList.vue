<script setup lang="ts">
</script>

<template>
  <div class="app-post-comment-list overflow-y-auto scrollbar-invisible">
    <slot>
      <v-row no-gutters class="text-center fill-height">
        <v-col align-self="center" v-text="$t('profile.post.comment.list.empty')" />
      </v-row>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.app-post-comment-list {

}
</style>
