<template>
  <button
    @click="select(value)"
    class="app-dropdown-item block w-full px-4 py-2 text-left text-sm"
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
