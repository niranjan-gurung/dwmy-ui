<template>
  <main class="flex flex-col bg-slate-50 h-screen px-4 py-2">
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
import { useCalendarNavigation } from '@/composables/useCalendarNavigation';

const {
  currentDate,
  currentMonthYear,
  changeMonth,
  goToToday
} = useCalendarNavigation();
</script>