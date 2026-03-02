<template>
  <div 
    :class="{'text-slate-500': !props.cell.isCurrentMonth}"
    class="flex justify-center text-xs font-semibold bg-white py-1"
  >
    <span 
      :class="props.cell.isToday ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'hover:bg-slate-200'" 
      class="flex items-center justify-center
            size-6 rounded-full cursor-pointer">
      {{ props.cell.day }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { CalendarCell } from '@/types/calendar';

const props = defineProps<{ 
  cell: CalendarCell 
}>();
</script>