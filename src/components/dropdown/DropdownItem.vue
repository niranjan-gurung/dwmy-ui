<template>
  <button
    @click="select(value)"
    class="block w-full text-left px-4 py-2 text-sm 
        hover:bg-slate-200 hover:cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { ViewMode } from '@/types/calendar';

const props = defineProps<{
  value: ViewMode
}>();

const select = inject<(value: ViewMode) => void>('dropdown-select')!;
</script>