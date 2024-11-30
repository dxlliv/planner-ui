<script setup lang="ts">
defineProps<{
  collection?: string
}>()
</script>

<template>
  <v-card class="app-post-detail app-post-detail--desktop" flat>
    <v-row class="ma-0">
      <v-col
        :cols="6"
        :class="[
          'pa-0 app-post-detail__media',
          { 'app-post-detail__media--reel': collection === 'reels' },
        ]"
        align-self="center"
      >

        <slot name="media" />

      </v-col>
      <v-col :cols="6" class="pa-0">
        <div class="app-post-detail__interactions">

          <slot name="detail" />

        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.app-post-detail {
  border-radius: 4px !important;
  min-height: 450px;

  &__media {
    &--reel {
      max-width: 50vh;
      aspect-ratio: 9 / 16;
    }
  }

  &__interactions {
    display: grid;
    min-height: calc(100% - 2px);
    grid-auto-rows: 64px auto 119px 56px;
  }
}
</style>