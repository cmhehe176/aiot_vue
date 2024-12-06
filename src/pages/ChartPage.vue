<script lang="ts" setup>
  import { objectService } from '@/service/object'
  import { useAuthStore } from '@/stores/auth'
  import { onMounted, ref } from 'vue'
  import FilterProject from '@/component/FilterProject.vue'

  const { profile } = useAuthStore()

  const data = ref()

  onMounted(async () => {
    data.value = await objectService.getObject()
  })
</script>

<template>
  <div><FilterProject class="p-1 w-full"/> <span>hello</span></div>
</template>

<style lang="scss" scoped></style>
