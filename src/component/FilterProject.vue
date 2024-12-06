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
  const modelDatePicker = defineModel<(string | Date)[]>('datePicker')
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
    <div class="item">
      <span class="pr-2">Project :</span>
      <el-select
        v-model="modelProject"
        placeholder="Select"
        style="width: 200px"
        :show-arrow="false"
        @change="handleChangeProject"
      >
        <el-option
          v-for="project in listProject"
          :key="project.id"
          :label="project.name"
          :value="project.id"
        />
      </el-select>
    </div>

    <div class="item">
      <span class="pr-2">Device :</span>
      <el-select
        v-model="modelDevice"
        placeholder="Select"
        style="width: 200px"
        :show-arrow="false"
      >
        <el-option
          v-for="device in listDeviceByProject"
          :key="device.id"
          :label="device.name"
          :value="device.id"
        />
      </el-select>
    </div>

    <div class="item">
      <span class="pr-2">Time</span>
      <el-date-picker
        v-model="modelDatePicker"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </div>

    <div class="item">
      <span class="pr-2">Object Type</span>
      <el-select
        v-model="modelTypeObject"
        placeholder="Select"
        style="width: 200px"
        :show-arrow="false"
      >
        <el-option
          v-for="item in optionsTypes"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        />
      </el-select>
    </div>
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
