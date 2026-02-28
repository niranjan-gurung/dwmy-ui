<template>
  <main class="flex flex-col bg-blue-50 h-screen p-4">
    <nav class="flex justify-between items-center border border-green-600">
      <div>toggle sidebar</div>
      <div>DWMY</div>
      <div>Today button</div>
      <div class="flex items-center gap-1">
        <button class="inline-flex items-center justify-center 
                size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                active:bg-slate-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button class="inline-flex items-center justify-center 
                size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                active:bg-slate-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>
      <div>{{ currentMonthYear }}</div>
      <div>date selector</div>
      <div 
        class="flex items-center justify-center size-10 
              rounded-full bg-neutral-200 border border-neutral-300" 
        alt="User profile">
        NG
      </div>
    </nav>
    <div class="flex flex-row flex-1 min-h-0">
      <section class="w-1/8 text-center border border-amber-500">
        <button>+ Create (drop down)</button>
        <section>
          mini calendar view (selector)
        </section>
      </section>
      <section class="flex-1 overflow-hidden bg-slate-300 rounded-4xl">
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
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';
import { ref, computed } from 'vue';
import type { CalendarCell } from '@/types/calendar';
import WeekdayHeader from '@/components/WeekdayHeader.vue';

const currentDate = ref<Date>(new Date());

const currentMonthYear = computed(() => {
  return `${currentDate.value.toLocaleString('en', {month: 'long'})} ${currentDate.value.getFullYear()}`;
})

const weekCount = computed(() => {
  return calendarCells.value.length / 7
})

const calendarCells = computed(() => {
  const cells: CalendarCell[] = [];
  const year = currentDate.value.getFullYear(); 
  const month = currentDate.value.getMonth(); 
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
})
</script>

<style lang="css" scoped>
</style>