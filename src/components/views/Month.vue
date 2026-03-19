<template>
  <div 
    class="grid grid-cols-7 gap-px h-full"
    :style="{
      gridTemplateRows: `auto repeat(${weekCount}, 1fr)`
    }"
  >
    <WeekdayHeader :isInitial="false" />
    <DayCard 
      v-for="cell in calendarCells" 
      :key="cell.fullDate.toISOString()"
      :cell="cell" 
    />
  </div>
</template>

<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';
import WeekdayHeader from '@/components/WeekdayHeader.vue';
import { useCalendarGrid } from '@/composables/useCalendarGrid';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const { calendarCells, weekCount } = 
  useCalendarGrid(toRef(props, 'currentDate'));
</script>