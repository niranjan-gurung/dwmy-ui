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

const props = defineProps<{
  value: string
}>();

const select = inject<(value: string) => void>('dropdown-select')!;
</script>