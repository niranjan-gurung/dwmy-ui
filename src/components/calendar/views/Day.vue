<template>
  <div class="flex flex-col h-full p-4 bg-white">
    <div class="flex flex-col w-32 items-center mb-4">
      <p class="text-xs text-gray-600 font-semibold">
        {{ weekdayShort.toUpperCase() }}
      </p>
      <p class="text-2xl font-semibold">
        {{ dayNumber }}
      </p>
    </div>
    <ul class="overflow-y-auto flex-1">
      <li
        v-for="hour in 24"
        :key="hour"
        class="mb-8 text-xs font-semibold text-gray-600 border-b border-slate-300"
      >
        {{ formatHour(hour - 1) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useDateFormatting } from '@/composables/useDateFormatting';

const props = defineProps<{ 
  currentDate: Date 
}>();

const {
  weekdayShort,
  dayNumber, 
  formatHour 
} = useDateFormatting(toRef(props, 'currentDate'));
</script>
