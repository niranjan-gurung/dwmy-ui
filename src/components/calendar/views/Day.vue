<template>
  <div class="flex flex-col h-full pl-4 pt-4 pb-4 bg-white">
    <div class="overflow-y-auto h-full">
      <div class="grid grid-cols-[60px_1fr]">
        <div class="sticky top-0 z-10 border-b border-r border-slate-300 bg-white 
              flex text-xs font-semibold text-gray-600 items-end"
        >
          GMT+01
        </div>

        <div class="sticky top-0 z-10 border-b border-slate-300 bg-white h-16">
          <div class="flex flex-col justify-start items-center h-full w-20">
            <p class="text-xs text-gray-600 font-semibold">
              {{ weekdayShort.toUpperCase() }}
            </p>
            <p class="text-2xl font-semibold">
              {{ dayNumber }}
            </p>
          </div>
        </div>
        
        <div>
          <div
            v-for="hour in 24"
            :key="hour"
            class="h-14 text-xs font-semibold text-gray-600 pt-1
                  border-b border-r border-slate-300 flex items-center"
          >
            {{ formatHour(hour - 1) }}
          </div>
        </div>
  
        <div class="flex flex-col">
          <div
            v-for="hour in 24"
            :key="hour"
            class="h-14 border-b border-slate-300 
                  hover:bg-blue-50 transition-colors cursor-pointer"
          />
        </div>
      </div>


    </div>
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
