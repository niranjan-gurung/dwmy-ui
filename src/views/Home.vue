<template>
  <main class="flex flex-col bg-blue-50 h-screen p-4">
    <nav class="flex justify-between items-center border border-green-600">
      <div>toggle sidebar</div>
      <div>DWMY</div>
      <div>Today button</div>
      <div><</div>
      <div>></div>
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
        <div class="grid grid-cols-7 gap-px bg-slate-300 h-full">
          <DayCard 
            v-for="value in calendarCells" 
            :key="value.fullDate.toISOString()"
            :cell="value" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';
import { ref, computed } from 'vue';
import type { CalendarCell } from '@/types/calendar';

const currentDate = ref<Date>(new Date());

const currentMonthYear = computed(() => {
  return `${currentDate.value.toLocaleString('en', {month: 'long'})} ${currentDate.value.getFullYear()}`;
})

const calendarCells = computed(() => {
  const cells: CalendarCell[] = [];
  const year = currentDate.value.getFullYear(); 
  const month = currentDate.value.getMonth(); 
  const daysThisMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayString = today.toDateString();
  
  // how many leading days from the prev month?
  // -> get 1st day of current month
  const firstOfTheMonth = new Date(year, month, 1).getDay();  // sunday
  
  // whats the last date of prev month?
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
  console.log(cells);

  // calculate leading trail for next month
  const arrlen = cells.length;
  if (arrlen < 42) {
    for (let day = 1; day <= (42 - arrlen); day++) {
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

// how many cells should be rendered(if 1st == sat, then 42 else 35)
</script>

<style lang="css" scoped>
</style>