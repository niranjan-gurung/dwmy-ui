<template>
  <div 
    :class="props.cell.isCurrentMonth ? 'bg-white' : 'text-slate-400'"
    class="text-center">
    <span 
      :class="props.cell.isToday ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'hover:bg-slate-200'" 
      class="inline-flex items-center justify-center text-xs font-semibold 
            size-6 rounded-full hover:cursor-pointer">
      {{ props.cell.day }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { CalendarCell } from '@/types/calendar';

const props = defineProps<{cell: CalendarCell}>();
</script>

<style scoped>
</style>