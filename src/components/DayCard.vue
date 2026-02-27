<template>
  <div class="h-full min-h-15 text-center bg-white">
    {{ day }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    day: number;
  }>();
</script>

<style scoped>
</style>