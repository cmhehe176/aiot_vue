<script lang="ts" setup>
  import { useAuthStore } from '@/stores/auth'
  import { onMounted, ref } from 'vue'
  import FilterProject from '@/component/FilterProject.vue'
  import ChartItem from '@/component/Chart/ChartItem.vue'
  import { objectService } from '@/service/object'
  const { profile } = useAuthStore()

  const data = ref()

  onMounted(async () => {
    data.value = await objectService.getMessage()
  })
</script>

<template>
  <div><FilterProject class="p-1 w-full" /><ChartItem /></div>
</template>

<style lang="scss" scoped></style>
