import { onMounted, onBeforeUnmount, type Ref } from 'vue';

export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  callback: () => void
) {

  function handleClick(event: MouseEvent) {
    const el = elementRef.value;
    if (!el) return;

    const target = event.target as Node;

    if (!el.contains(target)) {
      callback();
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick);
  });
}