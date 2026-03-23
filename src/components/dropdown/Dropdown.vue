<template>
  <div class="relative inline-block">
    <button 
      @click="isOpen = !isOpen"
      class="flex gap-2 border border-slate-500 rounded-4xl
            px-5 py-2 text-sm font-semibold text-slate-800
            hover:cursor-pointer hover:bg-gray-200
            active:bg-gray-300 transition-colors duration-200 ease-out"
      :class="btnClass"
    >
      <svg v-if="hasIcon"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 shrink-0 translate-y-px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <slot name="dropdown">
      </slot>
      <svg 
        viewBox="0 0 24 24" 
        class="size-4 shrink-0 self-center translate-y-px"
      >
        <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>

    <div 
      v-if="isOpen"
      class="absolute mt-2 pt-2 pb-2 w-36 bg-slate-100 border border-slate-200
            rounded-xl shadow-md z-50"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import type { ViewMode } from '@/types/calendar';

const emit = defineEmits<{
  'select': [value: ViewMode]
}>();

const props = defineProps<{
  btnClass?: string,
  hasIcon?: boolean
}>();

const isOpen = ref(false);

function select(value: ViewMode) {
  emit('select', value);
  isOpen.value = false;
}

provide('dropdown-select', select);
</script>