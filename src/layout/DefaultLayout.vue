<script lang="ts" setup>
  // Đoạn mã này sẽ báo lỗi nếu không tuân thủ thứ tự 'imports' -> 'props' -> 'state' -> 'methods' -> 'computed'

  const props = defineProps({
    name: String,
    age: Number,
  })

  const state = ref({
    count: 0,
  })

  const doubled = computed(() => state.value.count * 2)

  function increment() {
    state.value.count++
  }

  import { computed, defineProps, ref } from 'vue' // Import phải đứng trước
</script>
