<template>
  <aside class="w-64 bg-white bg-opacity-95 fixed top-4 bottom-8 left-0 shadow-2xl" style="border-radius: 50px;">
    <div class="px-8 py-8">
      <h2 class="text-2xl font-semibold text-black">Elite Euro App</h2>
    </div>
    <nav class="mt-10">
      <NuxtLink
        to="/garage"
        class="block py-2.5 px-8 rounded-xl hover:bg-apple-gray text-black flex transition-colors"
      >
      <WrenchScrewdriverIcon class="h-5 w-5 mr-2 text-gray-black" alt="Scanner Icon" />
        My Garage
      </NuxtLink>

      <NuxtLink
        to="/maintenance"
        class="block py-2.5 px-8 rounded-xl hover:bg-apple-gray flex text-black transition-colors"
      >
      <DocumentTextIcon class="h-5 w-5 mr-2 text-gray-black" alt="Scanner Icon" />
        Maintenance
      </NuxtLink>

      <NuxtLink
        to="/"
        class="block py-2.5 px-8 rounded-xl hover:bg-apple-gray text-black flex transition-colors"
      >
      <TruckIcon class="h-5 w-5 mr-2 text-gray-black" alt="Scanner Icon" />
        My Vehicles
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import {
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  TruckIcon
} from "@heroicons/vue/24/solid";
</script>
