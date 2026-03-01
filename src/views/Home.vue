<template>
  <main class="flex flex-col bg-blue-50 h-screen p-4">
    <nav class="flex justify-between items-center pb-2">
      <div class="flex justify-center items-center *:mr-4">
        <div>toggle sidebar</div>
        <div>DWMY</div>
        <button class="border border-slate-500 rounded-4xl 
                px-6 py-2 text-sm font-semibold text-slate-800 
                hover:cursor-pointer hover:bg-gray-200
                active:bg-gray-300 transition-colors duration-200 ease-out">
          Today
        </button>
        <div class="flex items-center gap-1">
          <button
            @click="changeMonth(-1)" 
            class="inline-flex items-center justify-center 
                  size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                  active:bg-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
  
          <button 
            @click="changeMonth(1)"
            class="inline-flex items-center justify-center 
                  size-6 rounded-full hover:bg-slate-200 hover:cursor-pointer
                  active:bg-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
        <div class=" text-xl">
          {{ currentMonthYear }}
        </div>
      </div>
      <div class="flex justify-center items-center *:ml-4">
        <button class="border border-slate-500 rounded-4xl
                px-6 py-2 text-sm font-semibold text-slate-800
                hover:cursor-pointer hover:bg-gray-200
                active:bg-gray-300 transition-colors duration-200 ease-out">
          Month
        </button>
        <div 
          class="flex items-center justify-center size-10 
                rounded-full bg-neutral-200 border border-neutral-300" 
          alt="User profile">
          NG
        </div>
      </div>
    </nav>
    <div class="flex flex-row flex-1 min-h-0">
      <section class="w-1/8 text-center border border-amber-500">
        <SideBar />
      </section>
      <section class="flex-1 overflow-hidden bg-slate-300 rounded-4xl">
        <Calendar :currentDate="currentDate" />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';
import SideBar from '@/components/SideBar.vue';
import { ref, computed } from 'vue';

const currentDate = ref<Date>(new Date());

const currentMonthYear = computed(() => {
  return `${currentDate.value.toLocaleString('en', {month: 'long'})} ${currentDate.value.getFullYear()}`;
});

function changeMonth(offset: number) {
  const d = new Date(currentDate.value);
  const day = d.getDate();

  d.setDate(1);
  d.setMonth(d.getMonth() + offset);

  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, daysInMonth));
  currentDate.value = d;
}
</script>

<style lang="css" scoped>
</style>