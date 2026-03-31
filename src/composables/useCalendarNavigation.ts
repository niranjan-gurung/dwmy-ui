import type { ViewMode } from '@/types/calendar';
import { ref, computed, type Ref } from 'vue';

export function useCalendarNavigation(viewMode: Ref<ViewMode>) {
  const currentDate = ref<Date>(new Date());

  function navigateDate(offset: number) {
    const d = new Date(currentDate.value);
    switch (viewMode.value) {
      case 'Day':
        d.setDate(d.getDate() + offset);
        break;
      case 'Week':
        d.setDate(d.getDate() + offset * 7);
        break;
      case 'Month':
        d.setMonth(d.getMonth() + offset);
        break;
      case 'Year':
        d.setFullYear(d.getFullYear() + offset);
        break;
    }
    currentDate.value = d;
  }

  function goToToday() {
    const today = new Date();

    // only update if current view is not todays current date 
    if (today.getFullYear() !== currentDate.value.getFullYear() ||
        today.getMonth() !== currentDate.value.getMonth() ||
        today.getDate() !== currentDate.value.getDate()
      ) {
      currentDate.value = today;
    }
  }

  return { 
    currentDate,
    navigateDate,
    goToToday
  }
}