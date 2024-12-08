<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'

  type TObjectType = {
    id: number
    projectId: number
    name: string
    human: number
    vehicle: number
    all: number
  }

  const { objectType } = defineProps<{ objectType: TObjectType[] }>()

  const chartData = ref()
  const chartOptions = ref()

  const setChartData = (objectType: TObjectType[]) => {
    const documentStyle = getComputedStyle(document.documentElement)

    return {
      labels: objectType.map((object) => object.name || 'inValidName'),
      datasets: [
        {
          type: 'bar',
          label: 'Both Detect',
          backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
          borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
          data: objectType.map((object) => object.all),
          stack: 'group1',
        },
        {
          type: 'bar',
          label: 'Human',
          backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          data: objectType.map((object) => object.human),
          stack: 'group2',
        },
        {
          type: 'bar',
          label: 'Vehicle',
          backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
          borderColor: documentStyle.getPropertyValue('--p-orange-500'),
          data: objectType.map((object) => object.vehicle),
          stack: 'group2',
        },
      ],
    }
  }

  const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--p-text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

    return {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    }
  }

  watch(
    () => objectType,
    (newValue) => {
      chartData.value = setChartData(newValue)
    },
  )

  onMounted(() => {
    // chartData.value = setChartData()
    chartOptions.value = setChartOptions()
  })
</script>

<template>
  <div class="object-type min-w-[500px]">
    <Fieldset legend="Type Of Object" :toggleable="true">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[15rem]" />
    </Fieldset>
  </div>
</template>
