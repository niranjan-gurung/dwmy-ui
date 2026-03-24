<template>
  <div class="relative inline-block">
    <button 
      @click="isOpen = !isOpen"
      :class="btnClass"
    >
      <slot name="button"></slot>
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
  btnClass?: string
}>();

const isOpen = ref(false);

function select(value: ViewMode) {
  emit('select', value);
  isOpen.value = false;
}

provide('dropdown-select', select);
</script>