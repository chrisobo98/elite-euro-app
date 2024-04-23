<template>
  <!-- Vehicle Information -->
  <BaseCard
    background-color="white"
    :transparent="false"
    :use-shadow="true"
  >
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-semibold">Your Vehicle Performance</h3>
      <a
        href="#"
        class="text-sm font-semibold text-primary-600 hover:text-primary-800"
        >See full specifications</a
      >
    </div>
    <div class="grid grid-cols-2 gap-4">
      <!-- Engine -->
      <div class="flex flex-col items-center">
        <DocumentTextIcon class="h-6 w-6 text-black mb-2" />
        <div class="text-center">
          <p class="font-semibold">Engine</p>
          <p>641 BHP</p>
        </div>
      </div>
      <!-- Transmission -->
      <div class="flex flex-col items-center">
        <TruckIcon class="h-6 w-6 text-black mb-2" />
        <div class="text-center">
          <p class="font-semibold">Transmission</p>
          <p>6 Speed</p>
        </div>
      </div>
      <!-- Cylinder -->
      <div class="flex flex-col items-center">
        <TruckIcon class="h-6 w-6 text-black mb-2" />
        <div class="text-center">
          <p class="font-semibold">Cylinder</p>
          <p>6 Speed</p>
        </div>
      </div>
      <!-- Power Output -->
      <div class="flex flex-col items-center">
        <TruckIcon class="h-6 w-6 text-black mb-2" />
        <div class="text-center">
          <p class="font-semibold">Power Output</p>
          <p>6 Speed</p>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from "@/components/Base/BaseCard.vue";
import {
  DocumentTextIcon,
  TruckIcon,
} from "@heroicons/vue/24/solid";
</script>
