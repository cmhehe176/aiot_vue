<template>
  <div class="content-item">
    <el-timeline style="max-width: 100%">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card class="flex">
          <span>infor</span>
          <leafletMap class="" :size="180" />
          <leafletMap class="" :size="180" />
          <leafletMap class="" :size="180" />
          <leafletMap class="" :size="180" />
          <leafletMap class="" :size="180" />
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script lang="ts" setup>
  import leafletMap from '../leafletMap.vue'
</script>
<style lang="scss" scoped>
  .content-item {
    height: 100vh;
    width: 100%;
  }
</style>
