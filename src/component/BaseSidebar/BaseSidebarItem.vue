<script lang="ts" setup>
  import BaseSidebarItem from './BaseSidebarItem.vue'
  import LabelSidebar from './LabelSidebar.vue'

  import type { ISidebar } from './type.ts'

  const { item } = defineProps<{ item: ISidebar }>()
</script>

<template>
  <div class="base-sidebar-item">
    <div v-if="!item.children" :to="{ name: item.name }" class="base-sidebar-item no-underline">
      <el-menu-item :index="item.path">
        <LabelSidebar :item="item" />
      </el-menu-item>
    </div>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <LabelSidebar :item="item" />
      </template>

      <el-menu-item-group v-if="item.children.length">
        <BaseSidebarItem v-for="subItem in item.children" :key="subItem.name" :item="subItem" />
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>
