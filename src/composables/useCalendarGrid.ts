import { computed, type Ref } from 'vue';
import type { CalendarCell, CalendarGridOptions } from '@/types/calendar';

export function useCalendarGrid(
  currentDate: Ref<Date>, 
  options: CalendarGridOptions = {}
) {
  const calendarCells = computed<CalendarCell[]>(() => {
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
    
    // current month
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
    if (options.fixedGrid) {
      while (cells.length < 42) {
        const last = cells[cells.length - 1];
        
        if (!last) break;
        const nextDate = new Date(last.fullDate);
        nextDate.setDate(nextDate.getDate() + 1);

        cells.push({
          day: nextDate.getDate(),
          isCurrentMonth: nextDate.getMonth() === month,
          isToday: nextDate.toDateString() === todayString,
          fullDate: nextDate
        });
      }
    }
    else {
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
    }
    return cells;
  });
  
  const weekCount = computed(() => {
    return options.fixedGrid ? 6 : calendarCells.value.length / 7
  });

  return {
    calendarCells,
    weekCount
  }
}