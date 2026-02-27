<template>
  <main class="flex flex-col bg-blue-50 h-screen p-4">
    <nav class="flex justify-between items-center border border-green-600">
      <div>toggle sidebar</div>
      <div>DWMY</div>
      <div>Today button</div>
      <div><</div>
      <div>></div>
      <div>today's date</div>
      <div>date selector</div>
      <div 
        class="flex items-center justify-center size-10 
              rounded-full bg-neutral-200 border border-neutral-300" 
        alt="User profile">
        NG
      </div>
    </nav>
    <div class="flex flex-row flex-1 min-h-0">
      <section class="w-1/8 text-center border border-amber-500">
        <button>+ Create (drop down)</button>
        <section>
          mini calendar view (selector)
        </section>
      </section>
      <section class="flex-1 overflow-hidden bg-slate-300 rounded-4xl">
        <div class="grid grid-cols-7 gap-px bg-slate-300 h-full">
          <DayCard 
            v-for="value in 35" 
            :key="value"
            :day="value" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';

</script>

<style lang="scss" scoped>
</style>