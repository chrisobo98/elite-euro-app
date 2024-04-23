<template>
    <BaseCard>
      <h2 class="text-lg font-semibold">Safety Recall Notices</h2>
      <!-- Placeholder for recall notices -->
      <p>No current recalls.</p>
      <!-- Placeholder for scheduling options -->
      <div class="grid grid-cols-1 lg:grid-cols-3 my-4">
        <BaseButton label="Schedule Check" class="mt-4 col-span-2 md:col-span-3 lg:col-span-2" />
      </div>
    </BaseCard>
  </template>
  
  <script setup>
  import BaseCard from '@/components/Base/BaseCard.vue';
  import BaseButton from '@/components/Base/BaseButton.vue';
  </script>
  