<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue'
  import BaseIcon from '@/component/BaseIcon.vue'
  import { sidebar } from '@/constant/sidebar'
  import BaseSidebar from '@/component/BaseSidebar/BaseSidebar.vue'
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()

  const screenWidth = ref(window.innerWidth)
  const isCollapse = ref(window.innerWidth < 1000 ? false : true)

  const dynamicClass = computed(() => (screenWidth.value < 1000 ? `fixed` : ``))

  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth

    if (screenWidth.value < 1000) isCollapse.value = false
    else isCollapse.value = true
  }

  const handleClickOutside = () => {
    if (screenWidth.value > 1000) return

    isCollapse.value = false
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize)
  })

  const handleLogout = () => {
    router.push({ name: 'login' })

    localStorage.removeItem('accessToken')
  }
</script>

<template>
  <div class="app-layout flex flex-col">
    <!-- Header -->
    <div class="header h-[70px] w-full p-2 flex justify-between bg-slate-400 fixed">
      <el-button @click="handleLogout"> logout</el-button>
    </div>

    <!-- Content -->
    <div class="content flex mt-[70px] fixed w-full">
      <div
        v-if="isCollapse"
        class="sidebar h-[90vh] p-2 w-[250px] border-r-2 bg-white z-50"
        :class="dynamicClass"
        v-click-outside="handleClickOutside"
      >
        <BaseSidebar
          :items="sidebar"
          :defaultOpens="[sidebar[0].path]"
          :active="useRoute().name?.toString()"
        />
      </div>

      <BaseIcon
        v-else
        name="arrow"
        size="40"
        class="fixed bottom-5 cursor-pointer"
        @click="isCollapse = true"
      />

      <div
        class="main p-4 overflow-y-auto h-full"
        :class="{ 'w-full h-full': !isCollapse, 'flex-1': isCollapse }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
