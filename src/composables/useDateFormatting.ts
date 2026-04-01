import { computed, type Ref } from 'vue';

export function useDateFormatting(currentDate: Ref<Date>) {

  const startOfWeek = computed(() => {
    const d = new Date(currentDate.value);
    const day = d.getDay(); 
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d;
  });

  const weekdays = computed(() => {
    const start = startOfWeek.value;

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  });

  const weekdayShort = computed(() =>
    currentDate.value.toLocaleDateString('en', { weekday: 'short' })
  );

  const weekdayLong = computed(() =>
    currentDate.value.toLocaleDateString('en', { weekday: 'long' })
  );

  const dayNumber = computed(() =>
    currentDate.value.toLocaleDateString('en', { day: 'numeric' })
  );

  const monthYear = computed(() =>
    currentDate.value.toLocaleDateString('en', {
      month: 'long',
      year: 'numeric'
    })
  );

  function isToday(date: Date): boolean {
    const today = new Date();

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  function formatHour(hour: number): string {
    if (hour === 0) return '12 AM';
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return '12 PM';
    return `${hour - 12} PM`;
  }

  return { 
    weekdays, 
    weekdayShort,
    weekdayLong,
    dayNumber,
    monthYear,
    isToday,
    formatHour 
  };
}