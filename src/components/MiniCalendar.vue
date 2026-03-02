<template>
  <div
    v-for="cell in calendarCells"
    :key="cell.fullDate.toISOString()"
    :class="{'text-slate-500': !cell.isCurrentMonth}"
    class="flex items-center justify-center text-xs py-1"
  >
    <span 
      :class="cell.isToday ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'hover:bg-slate-200'" 
      class="flex items-center justify-center size-6 rounded-full cursor-pointer">
      {{ cell.day }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useCalendarGrid } from '@/composables/useCalendarGrid';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const { calendarCells, weekCount } = 
  useCalendarGrid(toRef(props, 'currentDate'), { fixedGrid: true });
</script>
