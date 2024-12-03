<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import AlertFilter from './AlertFilter.vue'
  import AlertItem from './AlertItem.vue'
</script>

<template>
  <div class="alert w-full">
    <div class="filter"><AlertFilter /></div>
    <div class="content pt-5"><AlertItem /></div>
  </div>
</template>

<style lang="scss" scoped></style>
