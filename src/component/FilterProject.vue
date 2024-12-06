<script lang="ts" setup>
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import { optionsTypes } from '@/constant/optionsType'

  const authStore = useAuthStore()

  const { getListDeviceByProject } = useAuthStore()
  const { listProject, listDeviceByProject } = storeToRefs(authStore)

  const modelProject = defineModel<number>('project')
  const modelDevice = defineModel<number>('device')
  const modelDatePicker = defineModel<any>('datePicker')
  const modelTypeObject = defineModel<string>('typeObject')

  const handleChangeProject = () => {
    getListDeviceByProject(modelProject.value as number)

    const [defaultDevice] = listDeviceByProject.value
    modelDevice.value = defaultDevice.id
  }

  onMounted(() => {
    const [defaultProject] = listProject.value
    modelProject.value = defaultProject.id

    handleChangeProject()
  })
</script>

<template>
  <div class="filter flex flex-wrap w-full gap-10">
    <FloatLabel variant="on" class="md:w-52">
      <Select
        v-model="modelProject"
        inputId="project"
        :options="listProject"
        optionLabel="name"
        optionValue="id"
        class="w-full"
        @change="handleChangeProject"
      />
      <label for="project">Project</label>
    </FloatLabel>

    <FloatLabel variant="on" class="md:w-52">
      <Select
        v-model="modelDevice"
        inputId="device"
        :options="listDeviceByProject"
        optionLabel="name"
        optionValue="id"
        class="w-full"
      />
      <label for="device">Device</label>
    </FloatLabel>

    <FloatLabel variant="on" class="md:w-52">
      <DatePicker
        v-model="modelDatePicker"
        selectionMode="range"
        inputId="datepicker"
        class="w-full"
        dateFormat="dd/mm/yy"
      />
      <label for="datepicker">Select Date</label>
    </FloatLabel>

    <FloatLabel variant="on" class="w-36">
      <Select
        v-model="modelTypeObject"
        inputId="type"
        :options="optionsTypes"
        optionLabel="name"
        optionValue="value"
        class="w-full"
      />
      <label for="type">Object Type</label>
    </FloatLabel>
  </div>
</template>

<style lang="scss" scoped>
  .filter {
    .item {
      display: flex;
      flex-direction: column;
    }
  }
</style>
