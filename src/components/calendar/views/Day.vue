<template>
  <div class="flex flex-col h-full pl-4 pt-4 pb-4 bg-white">
    <div 
      @scroll.passive="onScroll"
      class="overflow-y-auto h-full"
    >
      <div class="grid grid-cols-[60px_1fr]">
        <div 
          class="sticky top-0 z-10 border-b border-r border-slate-300 bg-white 
              flex text-xs font-semibold text-gray-600 items-end"
          :class="{ 'shadow-[0_2px_4px_rgba(0,0,0,0.05)]': isScrolled }"
        >
          GMT+01
        </div>

        <div 
          class="sticky top-0 z-10 border-b border-slate-300 bg-white h-16"
          :class="{ 'shadow-[0_2px_4px_rgba(0,0,0,0.05)]': isScrolled }"
        >
          <div @scroll="" 
            class="group flex flex-col items-center h-full w-20 gap-1"
            :class="{'is-today': isToday(currentDate)}"
          >
            <p class="text-xs text-gray-600 font-semibold group-[.is-today]:text-blue-500">
              {{ weekdayShort.toUpperCase() }}
            </p>
            <p 
              class="flex justify-center items-center text-2xl font-semibold size-9
                    group-[.is-today]:bg-blue-500 group-[.is-today]:text-white group-[.is-today]:rounded-full"
            >
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
import { useScrollShadow } from '@/composables/useScrollShadow';

const props = defineProps<{ 
  currentDate: Date 
}>();

const {
  weekdayShort,
  dayNumber, 
  isToday,
  formatHour 
} = useDateFormatting(toRef(props, 'currentDate'));

const { 
  isScrolled, 
  onScroll 
} = useScrollShadow();
</script>
