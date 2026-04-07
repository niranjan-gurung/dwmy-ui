import { ref } from 'vue';

export function useScrollShadow() {
  const isScrolled = ref(false);

  function onScroll(e: Event) {
    const target = e.target as HTMLElement;
    if (!target) return;
    isScrolled.value = target.scrollTop > 0;
  }

  return { isScrolled, onScroll };
}