<template>
    <BaseCard>
      <h2 class="text-lg font-semibold">Customizations & Accessories</h2>
      <!-- Placeholder for customizations list -->
      <p>Custom Exhaust System</p>
      <p>LED Headlights</p>
      <!-- Recommendations for additional options -->
      <div class="grid grid-cols-1 lg:grid-cols-3 my-4">
        <BaseButton label="View Accessories" class="mt-4 col-span-2 md:col-span-3 lg:col-span-2" />
      </div>
    </BaseCard>
  </template>
  
  <script setup>
  import BaseCard from '@/components/Base/BaseCard.vue';
  import BaseButton from '@/components/Base/BaseButton.vue';
  </script>
  