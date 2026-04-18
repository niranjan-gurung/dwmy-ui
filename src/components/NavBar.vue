<template>
  <nav class="flex items-center justify-between pb-2">
    <div class="flex justify-center items-center gap-6">
      <!-- hamburger toggle button svg -->
      <button class="app-icon-button size-12"
      >
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
        @click="onTodayClicked"
        class="app-pill-button rounded-4xl px-6 py-2 text-sm font-semibold"
      >
        Today
      </button>
      <div class="flex items-center gap-1">
        <button
          @click="onNavigateDate(-1)" 
          class="app-icon-button size-10 translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button 
          @click="onNavigateDate(1)"
          class="app-icon-button size-10 translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>
      <h2 class="text-xl font-medium leading-none">
        {{ headerText }}
      </h2>
    </div>
    <div class="flex justify-center items-center gap-6">
      <Dropdown 
        @select="onSettingsSelect"
        btn-class="app-icon-button size-10"
      >
        <template #button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </template>
        <DropdownItem value="Settings">Settings</DropdownItem>
        <DropdownItem value="Appearance">Appearance</DropdownItem>
      </Dropdown>
      <Dropdown 
        @select="onViewModeUpdate"
        btn-class="app-pill-button flex gap-2 rounded-4xl px-5 py-2 text-sm font-semibold"
      >
        <template #button>
          {{ viewMode }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="size-4 shrink-0 self-center translate-y-px" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </template>
        <DropdownItem value="Day">Day</DropdownItem>
        <DropdownItem value="Week">Week</DropdownItem>
        <DropdownItem value="Month">Month</DropdownItem>
        <DropdownItem value="Year">Year</DropdownItem>
      </Dropdown>
      <div class="app-surface-subtle flex items-center justify-center 
          size-10 rounded-full border app-border
          hover:cursor-pointer hover:ring-2 hover:ring-blue-400/30" 
        alt="User profile"
      >
        NG
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown/DropdownItem.vue';
import type { ViewMode } from '@/types/calendar';
import { useTheme } from '@/composables/useTheme';

const emit = defineEmits<{
  'todayEvent': [],
  'updateViewMode': [value: ViewMode],
  'navigate': [offset: number]
}>();

const props = defineProps<{
  headerText: string,
  viewMode: ViewMode,
}>();

const { openAppearanceModal } = useTheme();

const onTodayClicked = () => emit('todayEvent');
const onViewModeUpdate = (value: string) => emit('updateViewMode', value as ViewMode);
const onNavigateDate = (offset: number) => emit('navigate', offset);
const onSettingsSelect = (value: string) => {
  if (value === 'Appearance') {
    openAppearanceModal();
  }
};
</script>
