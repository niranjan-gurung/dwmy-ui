import { computed, type Ref } from 'vue';
import type { ViewMode } from '@/types/calendar';

export function useCalendarHeader(
  currentDate: Ref<Date>,
  viewMode: Ref<ViewMode>
) {

  const headerText = computed(() => {
    const d = currentDate.value;

    switch (viewMode.value) {
      case 'Day':
        return d.toLocaleDateString('en', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        });

      case 'Week': {
        const start = new Date(d);
        start.setDate(d.getDate() - d.getDay());

        const end = new Date(start);
        end.setDate(start.getDate() + 6);

        if (end.getMonth() !== start.getMonth()) {
          return `
            ${start.toLocaleDateString('en', { month: 'short' })} - 
            ${end.toLocaleDateString('en', { month: 'short', year: 'numeric' })}`;
        }
      }
      case 'Month':
        return d.toLocaleDateString('en', { month: 'long', year: 'numeric' });

      case 'Year':
        return d.getFullYear().toString();
      
      default:
        return '';
    }
  });

  return { headerText };
}