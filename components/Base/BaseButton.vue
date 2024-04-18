<template>
    <button class="base-button">
      <i :class="`icon-${icon}`"></i>
      <span>{{ label }}</span>
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps({
    icon: String,
    label: String
  });
  </script>
  