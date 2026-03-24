<template>
  <div class="flex flex-col h-full bg-white">
    <div class="p-4">
      <h2>{{ formattedDate }}</h2>
    </div>
    <ul class="overflow-y-auto flex-1 px-4 pb-4">
      <li
        v-for="hour in 24"
        :key="hour"
        class="mb-4 border-b"
      >
        {{ formatHour(hour - 1) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const formattedDate = computed(() => {
  const weekday = props.currentDate.toLocaleDateString('en', {weekday: 'short'});
  const day = props.currentDate.getDate();
  return `${weekday} ${day}`;
});

function formatHour(hour: number): string {
  if (hour === 0) return 'GMT+00';
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return '12 PM';
  return `${hour - 12} PM`;
}

</script>
