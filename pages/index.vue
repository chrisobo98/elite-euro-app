<template>
  <h1 class="text-3xl ml-4 font-bold">Welcome, {Username}!</h1>
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <ServiceHistoryCard />
    <ServiceHistoryCard />
    <VehiclePerformanceCard />
    <ServiceHistoryCard />
    <ServiceHistoryCard />
    <VehiclePerformanceCard />
    <!-- <ServiceHistoryCard class="col-span-1 lg:col-span-2" />
    <VehiclePerformanceCard /> -->
  </div>
</template>

<script setup lang="ts">
import ServiceHistoryCard from "~/components/Dashboard/ServiceHistoryCard.vue";
import VehiclePerformanceCard from "~/components/Dashboard/VehiclePerformanceCard.vue";
import { ref } from 'vue';

const value = ref(null);
</script>
