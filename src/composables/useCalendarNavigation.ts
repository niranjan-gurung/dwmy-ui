import { ref, computed } from 'vue';

export function useCalendarNavigation() {
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

  return { 
    currentDate,
    currentMonthYear, 
    changeMonth,
    goToToday
  }
}