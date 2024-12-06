<script setup lang="ts">
  import { sidebar } from '@/constant/sidebar'
  import BaseIcon from '../BaseIcon.vue'
  import { ref } from 'vue'

  const expandedKeys = ref({
    dashboard: true,
  })
</script>

<template>
  <div class="card flex justify-center">
    <PanelMenu :model="sidebar" :expandedKeys="expandedKeys" class="w-full md:w-80" multiple>
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
