<template>
  <main class="flex flex-col bg-slate-50 h-screen px-4 py-2">
    <NavBar 
      :view-mode="viewMode"
      @update-view-mode="viewMode = $event"
      :current-date="currentDate"
      :current-month-year="currentMonthYear"
      @navigate="navigateDate"
      @today-event="goToToday"
    />
    <div class="flex flex-row flex-1 min-h-0">
      <section class="w-62">
        <SideBar 
          :current-date="currentDate"
          :current-month-year="currentMonthYear"
          @navigate="navigateDate"
        />
      </section>
      <section class="flex-1 overflow-hidden bg-slate-300 rounded-4xl ml-4">
        <Calendar 
          :view-mode="viewMode"
          :current-date="currentDate" 
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Calendar from '@/components/Calendar.vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import type { ViewMode } from '@/types/calendar';
import { useCalendarNavigation } from '@/composables/useCalendarNavigation';

const viewMode = ref<ViewMode>('Month');

const {
  currentDate,
  currentMonthYear,
  navigateDate,
  goToToday
} = useCalendarNavigation(viewMode);
</script>