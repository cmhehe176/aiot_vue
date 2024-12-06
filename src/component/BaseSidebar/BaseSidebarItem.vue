<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import BaseSidebarItem from './BaseSidebarItem.vue'
  import LabelSidebar from './LabelSidebar.vue'

  import type { ISidebar } from './type.ts'

  const { item } = defineProps<{ item: ISidebar }>()

  const router = useRouter()
</script>

<template>
  <div class="base-sidebar-item">
    <div
      v-if="!item.items"
      @click="router.push({ name: item.key })"
      class="base-sidebar-item no-underline"
    >
      <el-menu-item :index="item.path">
        <LabelSidebar :item="item" />
      </el-menu-item>
    </div>

    <el-sub-menu v-else :index="item.key">
      <template #title>
        <LabelSidebar :item="item" />
      </template>

      <el-menu-item-group v-if="item.items.length">
        <BaseSidebarItem v-for="subItem in item.items" :key="subItem.name" :item="subItem" />
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>
