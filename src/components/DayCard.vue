<template>
  <div 
    :class="isCurrentMonth ? '' : 'text-slate-500'"
    class="text-center bg-white">
    <span 
      :class="isToday ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'hover:bg-slate-200'" 
      class="inline-flex items-center justify-center text-xs font-semibold 
            size-6 rounded-full hover:cursor-pointer">
      {{ day }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { CalendarCell } from '@/types/calendar';
import { toRefs } from 'vue';

const { cell } = defineProps<{ cell: CalendarCell }>();
const { day, isToday, isCurrentMonth } = toRefs(cell);
</script>

<style scoped>
</style>