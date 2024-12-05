<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')

  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
</script>

<template>
  <div class="filter flex flex-wrap w-full gap-5">
    <div class="item">
      <span class="pr-2">Project :</span>
      <el-select v-model="value" placeholder="Select" style="width: 240px" :show-arrow="false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="item">
      <span class="pr-2">Device :</span>
      <el-select v-model="value" placeholder="Select" style="width: 240px" :show-arrow="false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="item">
      <span class="pr-2">Time</span>
      <el-select v-model="value" placeholder="Select" style="width: 240px" :show-arrow="false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="item">
      <span class="pr-2">Object Type</span>
      <el-select v-model="value" placeholder="Select" style="width: 240px" :show-arrow="false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
