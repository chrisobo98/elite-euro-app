<template>
  <BaseCard background-color="white" :transparent="false" :use-shadow="true">
    <h3 class="text-lg font-semibold">Service History Overview</h3>
    <p class="mt-2">Highlights of key services and repairs:</p>
    <ul class="mt-2 list-disc list-inside">
      <li>Last service: <strong>10,000 km ago</strong></li>
      <li>Major repairs: <strong>Replaced brake pads</strong></li>
      <li>Upcoming service: <strong>Oil change in 2,000 km</strong></li>
    </ul>
  </BaseCard>
</template>

<script setup>
import BaseCard from "@/components/Base/BaseCard.vue";
</script>
