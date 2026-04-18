<template>
  <div 
    :class="{ 'app-text-muted': !props.cell.isCurrentMonth }"
    class="app-surface flex justify-center py-1 text-xs font-semibold"
  >
    <span 
      :class="props.cell.isToday ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'hover:bg-(--surface-hover)'" 
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
