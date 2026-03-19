<template>
  <nav class="flex justify-between items-center pb-2">
    <div class="flex justify-center items-center gap-6">
      <!-- hamburger toggle button svg -->
      <button class="inline-flex justify-center items-center size-12 
              rounded-full hover:cursor-pointer hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-600">
          <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
        </svg>
        <h2 class="text-xl font-medium leading-none">
          Calendar
        </h2>
      </div>
      <button 
        @click="OnTodayClicked"
        class="border border-slate-500 rounded-4xl 
              px-6 py-2 text-sm font-semibold text-slate-800 
              hover:cursor-pointer hover:bg-gray-200
              active:bg-gray-300 transition-colors duration-200 ease-out">
        Today
      </button>
      <div class="flex items-center gap-1">
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
      <h2 class="text-xl font-medium leading-none">
        {{ currentMonthYear }}
      </h2>
    </div>
    <div class="flex justify-center items-center gap-6">
      <Dropdown @select="viewMode = $event">
        <template #label>
          {{ viewMode }}
        </template>
        <DropdownItem value="Day">Day</DropdownItem>
        <DropdownItem value="Week">Week</DropdownItem>
        <DropdownItem value="Month">Month</DropdownItem>
        <DropdownItem value="Year">Year</DropdownItem>
      </Dropdown>
      <div class="flex items-center justify-center 
          size-10 rounded-full bg-neutral-200 
          hover:cursor-pointer hover:ring-2 hover:ring-gray-300" 
        alt="User profile">
        NG
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown/DropdownItem.vue';

const emit = defineEmits<{
  'todayEvent': []
}>();

defineProps<{
  currentMonthYear: string,
  onMonthChange: (offset: number) => void
}>();

function OnTodayClicked() {
  emit('todayEvent');
}

const viewMode = ref('Month');
</script>
