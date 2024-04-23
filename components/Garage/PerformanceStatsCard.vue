<template>
    <BaseCard>
      <h2 class="text-lg font-semibold">Performance Stats</h2>
      <!-- Placeholder data -->
      <p>Mileage: 30,000 miles</p>
      <p>Average Speed: 45 mph</p>
      <!-- Add more stats as needed -->
      <!-- Placeholder for time frame comparison action -->
      <div class="grid grid-cols-1 lg:grid-cols-3 my-4">
      <BaseButton label="Compare Time Frames" class="mt-4 col-span-2 md:col-span-3 lg:col-span-2" />
      </div>
    </BaseCard>
  </template>
  
  <script setup>
  import BaseCard from '@/components/Base/BaseCard.vue';
  import BaseButton from '@/components/Base/BaseButton.vue';
  </script>
  