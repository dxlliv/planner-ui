<script setup lang="ts">
const emit = defineEmits(["select"])

defineProps<{
  tab: any
  active: boolean
}>()
</script>

<template>
  <div
    :class="[
      'app-profile-tab py-2 py-md-4',
      {
        'app-profile-tab--active': active,
      },
    ]"
    @click="emit('select', tab)"
  >
    <component
      :is="tab.icon.component"
      :icon="tab.icon.name"
    />

    <span v-text="tab.label" />
  </div>
</template>

<style scoped lang="scss">
.app-profile-tab {
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  padding: 16px 24px;
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));

  &--active {
    color: rgb(var(--v-theme-on-background));
    margin-top: -1px;

    @media (min-width: 960px) {
      border-top: 1px solid rgb(var(--v-theme-on-background));
    }

    @media (max-width: 959px) {
      border-bottom: 1px solid rgb(var(--v-theme-on-background));
      width: 33.3%;
    }
  }

  .v-icon {
    margin-right: 8px;
    vertical-align: -2px;
  }

  svg {
    margin-right: 8px;
    vertical-align: -6px;
  }

  @media (max-width: 959px) {
    padding: 12px 25px;

    .v-icon {
      font-size: 20px !important;
      vertical-align: middle;
    }

    span {
      display: none;
    }
  }
}
</style>
