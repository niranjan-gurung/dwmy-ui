<template>
  <div class="space-y-4">
    <Dropdown 
      @select="onCreateSelected"
      btn-class="flex items-center gap-2 bg-white
            shadow-md/20 rounded-2xl
            px-6 py-4 text-md font-semibold text-slate-800
            hover:cursor-pointer hover:bg-blue-100
            active:bg-blue-200 transition-colors duration-200 ease-out"
    >
      <template #button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Create
        <svg viewBox="0 0 24 24" class="size-4 shrink-0 self-center translate-y-px">
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </template>
      <DropdownItem value="Event">Event</DropdownItem>
      <DropdownItem value="Task">Task</DropdownItem>
    </Dropdown>
    <section class="space-y-2">
      <div class="flex items-center justify-between gap-1">
        <h2 class="font-semibold pl-2">
          {{ currentMonthYear }}
        </h2>
        <div>
          <button
            @click="onMonthChange(-1)"
            class="inline-flex items-center justify-center 
                  size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                  active:bg-slate-300 translate-y-px">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            @click="onMonthChange(1)"
            class="inline-flex items-center justify-center 
                  size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                  active:bg-slate-300 translate-y-px">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-px">
        <WeekdayHeader :isInitial="true" />
        <MiniCalendar :currentDate="currentDate" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown/DropdownItem.vue';
import MiniCalendar from './MiniCalendar.vue';
import WeekdayHeader from './WeekdayHeader.vue';

const props = defineProps<{ 
  currentDate: Date,
  currentMonthYear: string,
  onMonthChange: (offset: number) => void
}>();

function onCreateSelected() {
  console.log('create clicked!');
}

</script>