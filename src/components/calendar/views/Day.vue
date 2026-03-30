<template>
  <div class="flex flex-col h-full p-4 bg-white">
    <div class="flex flex-col w-32 items-center mb-4">
      <p class="text-xs text-gray-600 font-semibold">
        {{ weekday.toUpperCase() }}
      </p>
      <p class="text-2xl font-semibold">
        {{ today }}
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
import { computed } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const weekday = computed(() => props.currentDate.toLocaleDateString('en', { weekday: 'short' }));
const today = computed(() => props.currentDate.toLocaleDateString('en', { day: 'numeric' }));

function formatHour(hour: number): string {
  if (hour === 0) return 'GMT+00';
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return '12 PM';
  return `${hour - 12} PM`;
}
</script>
