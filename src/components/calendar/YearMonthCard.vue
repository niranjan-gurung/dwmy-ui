<template>
  <article class="app-surface flex h-full flex-col rounded-2xl border app-border p-3 transition-colors duration-200">
    <header class="mb-2 flex items-center justify-between gap-2">
      <h3 class="text-sm font-semibold text-(--text-primary)">
        {{ monthLabel }}
      </h3>
      <span
        v-if="isCurrentMonthInDisplayedYear"
        class="rounded-full bg-blue-500/12 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-500"
      >
        Current
      </span>
    </header>

    <div class="mb-1 grid grid-cols-7 gap-y-0.5">
      <span
        v-for="weekday in weekdayInitials"
        :key="weekday"
        class="text-center text-[9px] font-semibold uppercase app-text-muted"
      >
        {{ weekday }}
      </span>
    </div>

    <div class="grid flex-1 grid-cols-7 gap-y-0.5">
      <div
        v-for="cell in calendarCells"
        :key="cell.fullDate.toISOString()"
        class="flex items-center justify-center text-[11px]"
        :class="{ 'app-text-muted': !cell.isCurrentMonth }"
      >
        <span
          class="flex size-6 items-center justify-center rounded-full transition-colors duration-150 xl:size-7"
          :class="{
            'bg-blue-500 text-white': shouldHighlightToday(cell),
            'bg-(--surface-accent-soft) text-(--text-primary)': shouldHighlightReferenceDate(cell),
            'hover:bg-(--surface-hover)': !shouldHighlightToday(cell) && !shouldHighlightReferenceDate(cell)
          }"
        >
          {{ cell.day }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCalendarGrid } from '@/composables/useCalendarGrid';
import type { CalendarCell } from '@/types/calendar';
import { computed, toRef } from 'vue';

const props = defineProps<{
  monthDate: Date,
  referenceDate: Date
}>();

const { calendarCells } = useCalendarGrid(toRef(props, 'monthDate'), { fixedGrid: true });

const monthLabel = computed(() =>
  props.monthDate.toLocaleDateString('en', { month: 'long' })
);

const weekdayInitials = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const isCurrentMonthInDisplayedYear = computed(() => {
  const today = new Date();

  return (
    props.monthDate.getFullYear() === today.getFullYear() &&
    props.monthDate.getMonth() === today.getMonth()
  );
});

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function shouldHighlightToday(cell: CalendarCell): boolean {
  const today = new Date();

  return (
    cell.isCurrentMonth &&
    isSameDay(cell.fullDate, today) &&
    props.monthDate.getFullYear() === today.getFullYear()
  );
}

function shouldHighlightReferenceDate(cell: CalendarCell): boolean {
  return (
    cell.isCurrentMonth &&
    isSameDay(cell.fullDate, props.referenceDate) &&
    !shouldHighlightToday(cell)
  );
}
</script>
