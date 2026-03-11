<template>
  <div class="relative inline-block">
    <button 
      @click="isOpen = !isOpen"
      class="flex gap-2 border border-slate-500 rounded-4xl
            px-5 py-2 text-sm font-semibold text-slate-800
            hover:cursor-pointer hover:bg-gray-200
            active:bg-gray-300 transition-colors duration-200 ease-out">
      {{ modelValue }}
      <svg 
        viewBox="0 0 24 24" 
        class="size-4 shrink-0 self-center translate-y-px"
      >
        <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>

    <div 
      v-if="isOpen"
      class="absolute mt-2 w-36 bg-gray-100 border border-slate-200
            rounded-xl shadow-lg z-50"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const props = defineProps<{
  modelValue: string
}>();

const isOpen = ref(false);

function select(value: string) {
  emit('update:modelValue', value);
  isOpen.value = false;
}

provide('dropdown-select', select);
</script>