<script setup lang="ts">
defineProps<{
  collection?: string
}>()
</script>

<template>
  <v-card class="app-post-detail app-post-detail--desktop bg-background" flat>
    <v-row class="ma-0">
      <v-col
        :class="[
          'flex-grow-1 pa-0 app-post-detail__media',
          { 'app-post-detail__media--reel': collection === 'reels' },
        ]"
        style="width: calc(100% - 385px)"
        align-self="center"
      >

        <slot name="media" />

      </v-col>
      <v-divider vertical />
      <v-col
          class="flex-grow-0 pa-0"
          style="min-width: 385px !important;"
      >
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
  //min-height: 450px;
  max-height: 80dvh;

  &__media {
    &--reel {
      max-width: 50vh;
      aspect-ratio: 9 / 16;
    }
  }

  &__interactions {
    display: grid;
    grid-auto-rows: 65px calc(80dvh - 65px - 123px - 60px) 123px 60px;
  }
}
</style>