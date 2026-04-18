<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center px-4"
      @click.self="closeAppearanceModal"
    >
      <div
        class="absolute inset-0 bg-(--modal-overlay) backdrop-blur-sm"
        @click="closeAppearanceModal"
      />

      <div
        class="app-surface app-border relative z-10 w-full max-w-md rounded-3xl border p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appearance-modal-title"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 id="appearance-modal-title" class="text-xl font-semibold text-(--text-primary)">
              Appearance
            </h2>
            <p class="mt-1 text-sm text-(--text-secondary)">
              Choose how your calendar looks.
            </p>
          </div>

          <button
            type="button"
            class="app-icon-button"
            aria-label="Close appearance modal"
            @click="closeAppearanceModal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="size-5" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            v-for="option in themeOptions"
            :key="option.value"
            type="button"
            class="appearance-option"
            :class="{ 'appearance-option-active': theme === option.value }"
            @click="setTheme(option.value)"
          >
            <span
              class="block h-24 rounded-2xl border p-3"
              :class="option.previewClass"
            >
              <span class="block h-3 w-16 rounded-full" :class="option.headerClass" />
              <span class="mt-3 block h-7 rounded-xl" :class="option.surfaceClass" />
              <span class="mt-2 block h-7 rounded-xl" :class="option.mutedSurfaceClass" />
            </span>

            <span class="mt-3 flex items-center justify-between">
              <span>
                <span class="block text-sm font-semibold text-(--text-primary)">
                  {{ option.label }}
                </span>
                <span class="block text-xs text-(--text-secondary)">
                  {{ option.description }}
                </span>
              </span>

              <span
                class="flex size-5 items-center justify-center rounded-full border"
                :class="theme === option.value ? 'border-blue-500 bg-blue-500 text-white' : 'app-border bg-transparent text-transparent'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3.5">
                  <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-8 8a1 1 0 0 1-1.42-.008l-4-4a1 1 0 0 1 1.414-1.414l3.294 3.293 7.296-7.29a1 1 0 0 1 1.41.005Z" clip-rule="evenodd" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTheme, type ThemeMode } from '@/composables/useTheme';

const {
  theme,
  isAppearanceModalOpen: isOpen,
  setTheme,
  closeAppearanceModal,
} = useTheme();

const themeOptions: Array<{
  value: ThemeMode,
  label: string,
  description: string,
  previewClass: string,
  headerClass: string,
  surfaceClass: string,
  mutedSurfaceClass: string
}> = [
  {
    value: 'light',
    label: 'Light',
    description: 'Default bright calendar',
    previewClass: 'border-slate-200 bg-slate-50',
    headerClass: 'bg-slate-300',
    surfaceClass: 'bg-white border border-slate-200',
    mutedSurfaceClass: 'bg-slate-100 border border-slate-200',
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'Low-light, higher contrast',
    previewClass: 'border-[#3c4043] bg-[#1f1f1f]',
    headerClass: 'bg-[#8ab4f8]',
    surfaceClass: 'bg-[#2b2b2b] border border-[#3c4043]',
    mutedSurfaceClass: 'bg-[#313335] border border-[#3c4043]',
  },
];

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) {
    closeAppearanceModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>
