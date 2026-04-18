<template>
  <div class="space-y-4">
    <Dropdown 
      @select="onCreateSelected"
      btn-class="app-surface flex items-center gap-2 rounded-2xl border app-border
            px-6 py-4 text-md font-semibold shadow-md/20 transition-colors duration-200 ease-out hover:bg-(--surface-accent-soft)"
    >
      <template #button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Create
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="size-4 shrink-0 self-center translate-y-px" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </template>
      <DropdownItem value="Event">Event</DropdownItem>
      <DropdownItem value="Task">Task</DropdownItem>
    </Dropdown>
    <section class="space-y-2">
      <div class="flex items-center justify-between gap-1">
        <h2 class="font-semibold pl-2">
          {{ monthYear }}
        </h2>
        <div>
          <button
            @click="onNavigateDate(-1)"
            class="app-icon-button size-6 translate-y-px">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            @click="onNavigateDate(1)"
            class="app-icon-button size-6 translate-y-px">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-px">
        <WeekdayHeader 
          :current-date="currentDate"
          :is-initial="true" 
        />
        <MiniCalendar 
          :current-date="currentDate" 
          :view-mode="viewMode"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useDateFormatting } from '@/composables/useDateFormatting';
import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown/DropdownItem.vue';
import MiniCalendar from './MiniCalendar.vue';
import WeekdayHeader from './WeekdayHeader.vue';
import { toRef } from 'vue';
import type { ViewMode } from '@/types/calendar';

const emit = defineEmits<{
  'navigate': [offset: number]
}>();

const props = defineProps<{ 
  currentDate: Date,
  viewMode: ViewMode
}>();

const { monthYear } = useDateFormatting(toRef(props, 'currentDate'));

const onCreateSelected = () => console.log('create clicked!');
const onNavigateDate = (offset: number) => emit('navigate', offset);
</script>
