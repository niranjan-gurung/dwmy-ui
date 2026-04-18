import { computed, ref } from 'vue';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'dwmy-theme';
const theme = ref<ThemeMode>('light');
const isAppearanceModalOpen = ref(false);

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function applyTheme(nextTheme: ThemeMode) {
  theme.value = nextTheme;

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = nextTheme;
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }
}

function initializeTheme() {
  if (typeof window === 'undefined')
    return;

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (isThemeMode(storedTheme)) {
    applyTheme(storedTheme);
    return;
  }

  applyTheme('light');
}

if (typeof window !== 'undefined') {
  initializeTheme();
}

export function useTheme() {
  return {
    theme: computed(() => theme.value),
    isAppearanceModalOpen: computed(() => isAppearanceModalOpen.value),
    setTheme: applyTheme,
    openAppearanceModal: () => {
      isAppearanceModalOpen.value = true;
    },
    closeAppearanceModal: () => {
      isAppearanceModalOpen.value = false;
    },
    initializeTheme,
  };
}
