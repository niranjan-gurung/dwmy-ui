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
            class="app-border app-text-secondary flex h-14 items-center border-b border-r pt-1 text-xs font-semibold"
          >
            {{ formatHour(hour - 1) }}
          </div>
        </div>

        <!-- week grid -->
        <div class="grid grid-cols-7">
          <div 
            v-for="day in weekdays"
            :key="day.toISOString()"
            class="app-border flex flex-col border-r last:border-r-0"
            :class="{
              'bg-(--surface-accent-wash)': isToday(day)
            }"
          >
            <div 
              v-for="hour in 24"
              :key="hour"
              class="app-border h-14 cursor-pointer border-b hover:bg-(--surface-accent-wash)" 
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
import { useScrollShadow } from '@/composables/useScrollShadow';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const { 
  weekdays,
  isToday, 
  formatHour
} = useDateFormatting(toRef(props, 'currentDate'));

const { 
  isScrolled, 
  onScroll 
} = useScrollShadow();
</script>
