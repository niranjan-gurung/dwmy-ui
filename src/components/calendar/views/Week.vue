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
          <div class="grid grid-cols-7">
            <WeekdayHeader
              :current-date="currentDate" 
              :isInitial="false"
              view-mode="Week"
            />
          </div>
        </div>

        <!-- time labels -->
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

        <!-- week grid -->
        <div class="grid grid-cols-7">
          <div 
            v-for="day in weekdays"
            :key="day.toISOString()"
            class="flex flex-col border-r border-slate-300 last:border-r-0"
            :class="{
              'bg-blue-50/40': isToday(day)
            }"
          >
            <div 
              v-for="hour in 24"
              :key="hour"
              class="h-14 border-b border-slate-300
                    hover:bg-blue-50 cursor-pointer" 
            />
          </div>
        </div>
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

const { 
  weekdays,
  isToday, 
  formatHour
} = useDateFormatting(toRef(props, 'currentDate'));
</script>
