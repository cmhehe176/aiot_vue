<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('object')
  const options = ref()
</script>

<template>
  <div class="filter">
    <div class="flex flex-col items-start pt-2">
      <el-radio-group v-model="value" size="large">
        <el-radio-button label="Object" value="object" />
        <el-radio-button label="Sensor" value="sensor" />
        <el-radio-button label="Notification" value="notification" />
      </el-radio-group>
    </div>
    <div class="flex flex-wrap gap-4 items-center pt-4">
      <div class="flex flex-col items-start">
        <span class="mb-2">Project</span>
        <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex flex-col items-start">
        <span class="mb-2">Device</span>
        <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex flex-col items-start">
        <span class="mb-2">Type Detect</span>
        <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex flex-col items-start">
        <span class="mb-2">Select Date</span>
        <el-date-picker
          v-model="value"
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .filter {
    padding-left: 300px;
  }
</style>
