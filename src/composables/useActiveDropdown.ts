import { computed, ref } from 'vue';

const activeDropdownId = ref<string | null>(null);
let dropdownCount = 0;

export function useActiveDropdown(dropdownId?: string) {
  const resolvedDropdownId = dropdownId ?? `dropdown-${dropdownCount++}`;

  return {
    dropdownId: resolvedDropdownId,
    isOpen: computed(() => activeDropdownId.value === resolvedDropdownId),
    openDropdown: () => {
      activeDropdownId.value = resolvedDropdownId;
    },
    closeDropdown: () => {
      if (activeDropdownId.value === resolvedDropdownId) {
        activeDropdownId.value = null;
      }
    },
    toggleDropdown: () => {
      activeDropdownId.value =
        activeDropdownId.value === resolvedDropdownId ? null : resolvedDropdownId;
    },
  };
}
