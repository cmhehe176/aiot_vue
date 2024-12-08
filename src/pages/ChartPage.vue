<script lang="ts" setup>
  import { useAuthStore } from '@/stores/auth'
  import { ref, watch } from 'vue'
  import FilterProject from '@/component/FilterProject.vue'
  import MessageChart from '@/component/Chart/MessageDevice.vue'
  import { dashboardService } from '@/service/dashboard'
  import { storeToRefs } from 'pinia'
  import StatusDevice from '@/component/Chart/StatusDevice.vue'

  const { isAdmin } = storeToRefs(useAuthStore())

  const dataChart = ref()
  const modelProject = ref()

  watch(
    () => modelProject.value,
    async (newValue) => {
      const res = await dashboardService.getDashboard({
        projectId: newValue === -1 ? undefined : newValue,
      })

      if (!res) return

      dataChart.value = res
    },
  )
</script>

<template>
  <div>
    <FilterProject class="p-1 w-full" v-model:project="modelProject" />

    <div class="flex gap-20 flex-wrap mt-10">
      <div class="flex flex-col gap-8">
        <MessageChart :message-device="dataChart?.messageDevice" />
        <MessageChart :message-device="dataChart?.messageDevice" />
      </div>

      <StatusDevice :status-device="dataChart?.statusDevice" />
      <MessageChart :message-device="dataChart?.messageDevice" />
      <MessageChart :message-device="dataChart?.messageDevice" />
      <MessageChart :message-device="dataChart?.messageDevice" />
      <MessageChart :message-device="dataChart?.messageDevice" />
      <MessageChart :message-device="dataChart?.messageDevice" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
