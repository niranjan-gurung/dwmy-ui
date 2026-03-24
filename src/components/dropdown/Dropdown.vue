<template>
  <div ref="dropdownRef" class="relative inline-block">
    <button 
      @click.stop="isOpen = !isOpen"
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
import { useClickOutside } from '@/composables/useClickOutside';
import { ref, provide, useTemplateRef } from 'vue';

const emit = defineEmits<{
  'select': [value: string]
}>();

const props = defineProps<{
  btnClass?: string
}>();

const isOpen = ref(false);
const dropdownRef = useTemplateRef<HTMLElement>('dropdownRef');

useClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

function select(value: string) {
  emit('select', value);
  isOpen.value = false;
}

provide('dropdown-select', select);
</script>