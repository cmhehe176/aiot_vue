<script lang="ts" setup>
  import type { ISidebar } from './type'
  import BaseIcon from '@/component/BaseIcon.vue'

  const { item, isCollapse } = defineProps<{ item: ISidebar; isCollapse?: boolean }>()
</script>

<template>
  <div class="base-sidebar__label flex items-center gap-x-3">
    <BaseIcon :name="item.icon" size="20" />
    <span v-if="!isCollapse">{{ item.name }} </span>
  </div>
</template>
