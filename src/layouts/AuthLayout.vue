<template>
  <main class="bg-neutral-100 min-h-screen">
    <div class="mx-auto max-w-screen-2xl p-4">
      <nav class="flex justify-between items-center">
        <router-link 
          :to="authLink.to"
          class="btn btn-secondary">
          {{ authLink.label }}
        </router-link>
      </nav>
      <div class="flex flex-col items-center justify-center pt-4 md:pt-14">
        <div class="w-full max-w-md">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const authLink = computed(() => {
  return route.path === '/auth/login' ? 
        { to: '/auth/register', label: 'Sign Up' } : 
        { to: '/auth/login', label: 'Login' };
});
</script>

<style lang="scss" scoped>
</style>