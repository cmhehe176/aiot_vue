<script lang="ts" setup>
  import BaseSidebarItem from './BaseSidebarItem.vue'
  import type { IProps } from './type'

  const { items, active, defaultOpens } = defineProps<IProps>()
</script>

<template>
  <div class="base-sidebar">
    <el-menu
      class="h-full transition-all duration-300 ease-in-out overflow-clip w-full"
      :default-active="active || 'index'"
      :default-openeds="defaultOpens"
    >
      <BaseSidebarItem v-for="item in items" :key="item.path" :item="item" />
    </el-menu>
  </div>
</template>

<style lang="scss">
  .base-sidebar {
    .el-menu {
      border-right: 0;
    }
  }
</style>
