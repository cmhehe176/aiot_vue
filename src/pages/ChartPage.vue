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
  const modelDatePicker = ref()

  watch(
    () => [modelProject.value, modelDatePicker.value],
    async ([newProject, newDatePicker]) => {
      const res = await dashboardService.getDashboard({
        projectId: newProject === -1 ? undefined : newProject,
        startDate: newDatePicker ? newDatePicker[0] : undefined,
        endDate: newDatePicker ? newDatePicker[1] : undefined,
      })

      if (!res) return

      dataChart.value = res
    },
  )
</script>

<template>
  <div>
    <FilterProject
      class="p-1 w-full"
      v-model:project="modelProject"
      v-model:date-picker="modelDatePicker"
    />

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
