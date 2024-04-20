<template>
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
    <ServiceHistoryCard />
    <ServiceHistoryCard />
    <VehiclePerformanceCard />
    <ServiceHistoryCard />
    <ServiceHistoryCard />
    <VehiclePerformanceCard />
  </div>
</template>

<script setup lang="ts">
import ServiceHistoryCard from "~/components/Dashboard/ServiceHistoryCard.vue";
import VehiclePerformanceCard from "~/components/Dashboard/VehiclePerformanceCard.vue";
</script>
