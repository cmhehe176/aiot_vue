<script setup lang="ts">
  import { sidebars } from '@/constant/sidebar'
  import BaseIcon from '../BaseIcon.vue'
  import { onMounted, ref } from 'vue'
  import type { ISidebar } from '../Sidebar/type'
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'

  const { isAdmin } = storeToRefs(useAuthStore())

  const expandedKeys = ref({
    dashboard: true,
  })

  const sidebarItems = ref(sidebars)

  const removeAdminItems = (sidebars: ISidebar[]): ISidebar[] => {
    return sidebars
      .filter((sidebar) => !sidebar.admin)
      .map((sidebar) => ({
        ...sidebar,
        items: sidebar.items ? removeAdminItems(sidebar.items) : undefined,
      }))
  }

  onMounted(() => {
    if (isAdmin.value) return

    sidebarItems.value = removeAdminItems(sidebars)
  })
</script>

<template>
  <div class="card flex justify-center">
    <PanelMenu :model="sidebarItems" :expandedKeys="expandedKeys" class="w-full md:w-80" multiple>
      <template #item="{ item }">
        <RouterLink
          :to="{ name: item.key }"
          class="flex items-center px-4 py-2 cursor-pointer group"
        >
          <BaseIcon v-if="item.icon" :name="item.icon" size="18" />
          <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.name }}</span>
        </RouterLink>
      </template>
    </PanelMenu>
  </div>
</template>
