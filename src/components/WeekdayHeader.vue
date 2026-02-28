<template>
  <div 
    v-for="day in WEEKDAYS" 
    :key="day"
    class="bg-white text-xs text-slate-600 font-semibold pt-2 text-center"
  >
    {{ day.toUpperCase() }}
  </div>
</template>

<script setup lang="ts">
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>