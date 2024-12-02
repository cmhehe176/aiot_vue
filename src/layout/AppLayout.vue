<script lang="ts" setup></script>

<template>
  <div class="layout flex flex-col h-screen">
    <!-- Header -->

    <div class="header h-12 bg-gray-100 border-b border-gray-300">header</div>
    <!-- Container -->

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->

      <div class="sidebar max-w-[30%] bg-gray-800 text-white p-5">
        <div>sidebar</div>
      </div>
      <!-- Content -->

      <div class="content flex flex-1 flex-col bg-gray-100">
        <!-- Main -->
        <div class="main flex-1 p-5 overflow-y-auto">
          <slot></slot>
        </div>
        <!-- Footer -->
        <div
          class="footer h-10 bg-gray-300 border-t border-gray-300 flex items-center justify-center"
        >
          footer
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    background-color: #edf5f3;
  }
</style>
