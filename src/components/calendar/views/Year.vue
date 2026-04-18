<template>
  <div class="app-surface h-full overflow-y-auto rounded-[inherit] px-3 py-3 md:px-4 md:py-4">
    <section class="mx-auto flex h-full max-w-7xl flex-col">
      <div class="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
        <YearMonthCard
          v-for="monthDate in monthDates"
          :key="monthDate.toISOString()"
          :month-date="monthDate"
          :reference-date="currentDate"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import YearMonthCard from '../YearMonthCard.vue';

const props = defineProps<{ 
  currentDate: Date 
}>();

const monthDates = computed(() =>
  Array.from({ length: 12 }, (_, month) =>
    new Date(props.currentDate.getFullYear(), month, 1)
  )
);
</script>
