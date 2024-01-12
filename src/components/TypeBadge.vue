<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>
<template>
  <span :class="`bg-${type}`" class="text-white text-xs py-1 px-3 rounded-full">
    {{ type }}
  </span>
</template>