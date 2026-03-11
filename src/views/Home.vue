<template>
  <main class="flex flex-col bg-blue-50 h-screen px-4 py-2">
    <NavBar 
      :currentMonthYear="currentMonthYear"
      :onMonthChange="changeMonth" 
      @todayEvent="goToToday"
    />
    <div class="flex flex-row flex-1 min-h-0">
      <section class="w-62">
        <SideBar 
          :currentDate="currentDate"
          :currentMonthYear="currentMonthYear"
          :onMonthChange="changeMonth"
        />
      </section>
      <section class="flex-1 overflow-hidden bg-slate-300 rounded-4xl ml-4">
        <Calendar :currentDate="currentDate" />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import { ref, computed } from 'vue';

const currentDate = ref<Date>(new Date());

const currentMonthYear = computed(() => {
  return `${currentDate.value.toLocaleString('en', {month: 'long'})} ${currentDate.value.getFullYear()}`;
});

function changeMonth(offset: number) {
  const d = new Date(currentDate.value);
  const day = d.getDate();

  d.setDate(1);
  d.setMonth(d.getMonth() + offset);

  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, daysInMonth));
  currentDate.value = d;
}

function goToToday() {
  const today = new Date();

  // only update if current view is not todays current date 
  if (today.getFullYear() !== currentDate.value.getFullYear() ||
      today.getMonth() !== currentDate.value.getMonth()
    ) {
    currentDate.value = today;
  }
}
</script>