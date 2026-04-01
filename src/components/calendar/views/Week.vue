<template>
  <div class="flex flex-col h-full p-4 bg-white">
    <!-- sticky header -->
    <div class="flex h-18 mb-8 text-gray-600 border-b border-slate-300">
      <div class="flex text-xs font-semibold items-end">
        GMT+01
      </div>
      <div class="grid grid-cols-7 gap-px w-full">
        <WeekdayHeader
          :current-date="currentDate" 
          :isInitial="false"
          view-mode="Week"
        />
      </div>
    </div>

    <div class="flex">
      <div>
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
      
      <div class="grid grid-cols-7 gap-px w-full">
        <p
          v-for="day in 7"
          :key="day"
          class="border-b border-slate-300 text-center">
          hello
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeekdayHeader from '@/components/WeekdayHeader.vue';
import { useDateFormatting } from '@/composables/useDateFormatting';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const { formatHour } = useDateFormatting(toRef(props, 'currentDate'));
</script>
