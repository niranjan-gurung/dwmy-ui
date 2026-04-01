<template>
  <div 
    v-for="day in weekdays" 
    :key="day.toISOString()"
    class="group text-xs text-gray-600 font-semibold text-center"
    :class="{
      'bg-white': !isInitial && viewMode !== null,
      'is-today': isToday(day)
    }"
  >
    <p 
      v-if="viewMode !== 'Week'"
      class="pt-2"
    >
      {{ !isInitial 
          ? day.toLocaleDateString('en', { weekday: 'short' }).toUpperCase() 
          : day.toLocaleDateString('en', { weekday: 'short' })[0] }}
    </p>
    <div v-else class="flex flex-col items-center gap-1">
      <p class="text-xs font-semibold group-[.is-today]:text-blue-500">
        {{ day.toLocaleDateString('en', { weekday: 'short' }).toUpperCase() }}
      </p>
      <p class="flex justify-center items-center text-2xl font-semibold size-9 text-black
        group-[.is-today]:bg-blue-500 group-[.is-today]:text-white group-[.is-today]:rounded-full"
      >
        {{ day.getDate() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormatting } from '@/composables/useDateFormatting';
import { toRef } from 'vue';

const props = defineProps<{ 
  currentDate: Date,
  isInitial: boolean,
  viewMode?: string
}>();

const {
  weekdays, 
  isToday 
} = useDateFormatting(toRef(props, 'currentDate'));
</script>