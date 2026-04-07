<template>
  <div
    v-for="cell in calendarCells"
    :key="cell.fullDate.toISOString()"
    :class="{'text-slate-500': !cell.isCurrentMonth}"
    class="flex items-center justify-center text-xs py-1"
  >
    <span 
      class="flex items-center justify-center size-6 rounded-full cursor-pointer"
      :class="{ 
        'bg-blue-500 text-white': cell.isToday, 
        'bg-blue-200': shouldHighlight(cell),
        'hover:bg-slate-200': !cell.isToday
      }"
    >
      {{ cell.day }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useCalendarGrid } from '@/composables/useCalendarGrid';
import type { CalendarCell, ViewMode } from '@/types/calendar';
import { computed } from 'vue';

const props = defineProps<{ 
  currentDate: Date,
  viewMode: ViewMode 
}>();

const displayDate = computed(() => {
  const d = new Date(props.currentDate);

  if (props.viewMode === 'Week') {
    // anchor to start of week (sunday)
    const day = d.getDay();
    d.setDate(d.getDate() - day);
  }

  return d;
});

const { calendarCells, weekCount } = 
  useCalendarGrid(displayDate, { fixedGrid: true });

const highlightDate = computed(() => {
  const d = new Date(props.currentDate);

  switch (props.viewMode) {
    case 'Day':
      return d;

    case 'Week': {
      const day = d.getDay();
      const sunday = new Date(d);
      sunday.setDate(sunday.getDate() - day);
      return sunday;
    }

    case 'Month':
      return new Date(d.getFullYear(), d.getMonth(), 1);

    default:
      return d;
  }
});

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function shouldHighlight(cell: CalendarCell) {
  if (!isSameDay(cell.fullDate, highlightDate.value)) {
    return false;
  }

  // restrict for Month view
  if (props.viewMode === 'Month')
    return cell.isCurrentMonth;

  return true;
}
</script>
