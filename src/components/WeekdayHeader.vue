<template>
  <div 
    v-for="day in weekdays" 
    :key="day.toISOString()"
    class="text-xs text-gray-600 font-semibold text-center"
    :class="{'bg-white': !isInitial && viewMode !== null}"
  >
    <p 
      v-if="viewMode !== 'Week'"
      class="pt-2"
    >
      {{ !isInitial 
          ? day.toLocaleDateString('en', { weekday: 'short' }).toUpperCase() 
          : day.toLocaleDateString('en', { weekday: 'short' })[0] }}
    </p>
    <div v-else>
      <p class="text-xs font-semibold">
        {{ day.toLocaleDateString('en', { weekday: 'short' }) }}
      </p>
      <p class="text-2xl font-semibold text-black">
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

const { weekdays } = useDateFormatting(toRef(props, 'currentDate'));
</script>