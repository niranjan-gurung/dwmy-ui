<script setup lang="ts">
import AppearanceModal from './components/AppearanceModal.vue';
import { useTheme } from './composables/useTheme';

const { initializeTheme } = useTheme();

initializeTheme();
</script>

<template>
  <div id="app" class="min-h-screen bg-(--app-bg) text-(--text-primary) transition-colors duration-200">
    <router-view />
    <AppearanceModal />
  </div>
</template>

<style scoped></style>
