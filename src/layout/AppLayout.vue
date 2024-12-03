<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue'
  import arrowSvg from '@/assets/icon/arrow.svg'

  const isCollapse = ref(true)
  const screenWidth = ref(window.innerWidth)

  const dynamicClass = computed(() => (screenWidth.value < 1000 ? `fixed top-25` : ``))

  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth

    if (screenWidth.value < 1000) isCollapse.value = false
    else isCollapse.value = true
  }

  const handleClickOutside = () => {
    if (screenWidth.value > 1000) return

    isCollapse.value = !isCollapse.value
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize)
  })
</script>

<template>
  <div class="app-layout flex flex-col">
    <div class="header h-[10vh] w-full p-2 flex justify-between bg-slate-400">header</div>
    <div class="content flex">
      <div
        v-if="isCollapse"
        class="sidebar h-[90vh] p-2 bg-red-300 w-[250px]"
        :class="dynamicClass"
        v-click-outside="handleClickOutside"
      >
        sidebar
      </div>
      <img
        v-else
        :src="arrowSvg"
        alt="Arrow Icon"
        class="w-10 h-10 fixed bottom-5 cursor-pointer"
        @click="isCollapse = true"
      />
      <div class="main p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
