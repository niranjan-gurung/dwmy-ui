<template>
  <div class="app-surface flex h-full flex-col pb-4 pl-4 pt-4">
    <div 
      @scroll.passive="onScroll"
      class="overflow-y-auto h-full"
    >
      <div class="grid grid-cols-[60px_1fr]">
        <div 
          class="app-surface app-border sticky top-0 z-10 flex items-end border-b border-r text-xs font-semibold app-text-secondary"
          :class="{ 'shadow-[0_2px_4px_rgba(0,0,0,0.05)]': isScrolled }"
        >
          GMT+01
        </div>

        <div 
          class="app-surface app-border sticky top-0 z-10 h-16 border-b"
          :class="{ 'shadow-[0_2px_4px_rgba(0,0,0,0.05)]': isScrolled }"
        >
          <div @scroll="" 
            class="group flex flex-col items-center h-full w-20 gap-1"
            :class="{'is-today': isToday(currentDate)}"
          >
            <p class="text-xs font-semibold app-text-secondary group-[.is-today]:text-blue-500">
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
            class="app-border app-text-secondary flex h-14 items-center border-b border-r pt-1 text-xs font-semibold"
          >
            {{ formatHour(hour - 1) }}
          </div>
        </div>
  
        <div class="flex flex-col">
          <div
            v-for="hour in 24"
            :key="hour"
            class="app-border h-14 cursor-pointer border-b transition-colors hover:bg-(--surface-accent-wash)"
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
