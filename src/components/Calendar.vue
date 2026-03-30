<template>
  <Day v-if="viewMode === 'Day'" :currentDate="currentDate" />
  <Week v-else-if="viewMode === 'Week'" :currentDate="currentDate" />
  <Month v-else-if="viewMode === 'Month'" :currentDate="currentDate" />
  <Year v-else-if="viewMode === 'Year'" :currentDate="currentDate" />
</template>

<script setup lang="ts">
import Month from './calendar/views/Month.vue';
import Day from './calendar/views/Day.vue';
import type { ViewMode } from '@/types/calendar';
import Week from './calendar/views/Week.vue';
import Year from './calendar/views/Year.vue';

const props = defineProps<{ 
  viewMode: ViewMode,
  currentDate: Date 
}>();
</script>