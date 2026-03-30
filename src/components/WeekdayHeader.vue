<template>
  <div 
    v-for="day in WEEKDAYS" 
    :key="day"
    class="text-xs text-gray-500 font-semibold pt-2 text-center"
    :class="{'bg-white': !isInitial}"
  >
    {{ !isInitial ? day.toUpperCase() : day[0] }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  isInitial: boolean 
}>();
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>