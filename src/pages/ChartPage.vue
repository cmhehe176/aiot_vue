<script lang="ts" setup>
  import { objectService } from '@/service/object'
  import { onMounted, ref } from 'vue'

  const data = ref()

  onMounted(async () => {
    data.value = await objectService.getObject()
  })
</script>

<template>
  <div>chart {{ data }}</div>
</template>

<style lang="scss" scoped></style>
