<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import LeafletMap from '@/component/leafletMap.vue'
  import Filter from '@/component/dashboard/filter.vue'
</script>

<template>
  <LeafletMap :lat="40.7128" :lng="-74.006" :height="200" :width="200" description="New York" />

  <Filter />
  <el-upload></el-upload>
</template>

<style lang="scss" scoped></style>
