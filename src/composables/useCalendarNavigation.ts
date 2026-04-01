import type { ViewMode } from '@/types/calendar';
import { ref, type Ref } from 'vue';
import { useDateFormatting } from './useDateFormatting';

export function useCalendarNavigation(viewMode: Ref<ViewMode>) {
  const currentDate = ref<Date>(new Date());
  
  const { isToday } = useDateFormatting(currentDate);

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
    // only update if current view is not todays current date 
    if (!isToday(currentDate.value)) {
      currentDate.value = new Date();
    }
  }

  return { 
    currentDate,
    navigateDate,
    goToToday
  }
}