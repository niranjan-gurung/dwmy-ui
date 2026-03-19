<template>
  <p v-if="viewMode === 'Day'">this is the day view!</p>
  <p v-else-if="viewMode === 'Week'">this is the week view!</p>
  <Month v-else-if="viewMode === 'Month'" :currentDate="currentDate" />
  <p v-else-if="viewMode === 'Year'">this is the year view!</p>
</template>

<script setup lang="ts">
import Month from './views/Month.vue';

const props = defineProps<{ 
  viewMode: string,
  currentDate: Date 
}>();
</script>