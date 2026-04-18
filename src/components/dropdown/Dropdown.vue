<template>
  <div ref="dropdownRef" class="relative inline-block">
    <button 
      @click.stop="toggleDropdown"
      :class="btnClass"
    >
      <slot name="button"></slot>
    </button>
    <div 
      v-if="isOpen"
      class="app-dropdown-panel absolute mt-2 pt-2 pb-2 w-44
            rounded-xl shadow-md z-50"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClickOutside } from '@/composables/useClickOutside';
import { useActiveDropdown } from '@/composables/useActiveDropdown';
import { onUnmounted, provide, useTemplateRef } from 'vue';

const emit = defineEmits<{
  'select': [value: string]
}>();

const props = defineProps<{
  btnClass?: string
}>();

const dropdownRef = useTemplateRef<HTMLElement>('dropdownRef');
const {
  dropdownId,
  isOpen,
  closeDropdown,
  toggleDropdown,
} = useActiveDropdown();

useClickOutside(dropdownRef, () => {
  if (isOpen.value) {
    closeDropdown();
  }
});

function select(value: string) {
  emit('select', value);
  closeDropdown();
}

provide('dropdown-select', select);

onUnmounted(() => {
  closeDropdown();
});
</script>
