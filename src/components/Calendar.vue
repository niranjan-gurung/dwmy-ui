<template>
  <div 
    class="grid grid-cols-7 gap-px bg-slate-300 h-full"
    :style="{
      gridTemplateRows: `auto repeat(${weekCount}, 1fr)`
    }"
  >
    <WeekdayHeader />
    <DayCard 
      v-for="value in calendarCells" 
      :key="value.fullDate.toISOString()"
      :cell="value" 
    />
  </div>
</template>

<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';
import { computed } from 'vue';
import type { CalendarCell } from '@/types/calendar';
import WeekdayHeader from '@/components/WeekdayHeader.vue';

const { currentDate } = defineProps<{currentDate: Date}>();

const weekCount = computed(() => {
  return calendarCells.value.length / 7
});

const calendarCells = computed(() => {
  const cells: CalendarCell[] = [];
  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth(); 
  const daysThisMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayString = today.toDateString();
  
  const firstOfTheMonth = new Date(year, month, 1).getDay(); 
  const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

  // calculate leading trail for prev month
  for (let i = 1; i <= firstOfTheMonth; i++) {
    var day = lastDateOfPrevMonth - (firstOfTheMonth - i);
    const fullDate = new Date(year, month - 1, day);
    cells.push({
      day: day,
      isCurrentMonth: false,
      isToday: fullDate.toDateString() === todayString,
      fullDate: fullDate
    });
  }
  
  for (let day = 1; day <= daysThisMonth; day++) {
    const fullDate = new Date(year, month, day);
    cells.push({
      day,
      isCurrentMonth: true,
      isToday: fullDate.toDateString() === todayString,
      fullDate: fullDate
    });
  }

  // calculate leading trail for next month
  const remainder = cells.length % 7;
  if (remainder !== 0) {
    const daysToAdd = 7 - remainder;
    for (let day = 1; day <= daysToAdd; day++) {
      const fullDate = new Date(year, month + 1, day);
      cells.push({
        day,
        isCurrentMonth: false,
        isToday: fullDate.toDateString() === todayString,
        fullDate: fullDate
      });
    } 
  }
  return cells;
});
</script>