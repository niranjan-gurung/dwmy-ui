<template>
  <div class="flex flex-col h-full p-4 bg-white">
    <div class="grid grid-cols-7 gap-px">
      <WeekdayHeader
        :current-date="currentDate" 
        :isInitial="false"
        view-mode="Week"
      />
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
  </div>
</template>

<script setup lang="ts">
import WeekdayHeader from '@/components/WeekdayHeader.vue';
import { useDateFormatting } from '@/composables/useWeekDates';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const { formatHour } = useDateFormatting(toRef(props, 'currentDate'));
</script>
