<template>
  <div class="px-8 py-8">
    <h2 class="text-2xl font-semibold text-black hidden lg:block">Elite Euro App</h2>
  </div>
  <nav class="mt-10 px-2">
    <!-- Home -->
    <NuxtLink
        to="/"
        class="flex items-center justify-center lg:justify-start hover:bg-apple-gray px-3 py-3 rounded-xl transition-colors"
      >
        <HomeIcon class="h-5 w-5 text-gray-black" alt="Home" />
        <span class="ml-2 hidden lg:inline">Home</span>
      </NuxtLink>

    <!-- Garage -->
    <NuxtLink
      to="/garage"
      class="flex items-center justify-center lg:justify-start hover:bg-apple-gray px-3 py-3 rounded-xl transition-colors"
    >
      <WrenchScrewdriverIcon
        class="h-5 w-5 text-gray-black"
        alt="Scanner Icon"
      />
      <span class="ml-2 hidden lg:inline">My Garage</span>
    </NuxtLink>

    <!-- Maintenance -->
    <NuxtLink
      to="/maintenance"
      class="flex items-center justify-center lg:justify-start hover:bg-apple-gray px-3 py-3 rounded-xl transition-colors"
    >
      <DocumentTextIcon
        class="h-5 w-5 text-gray-black"
        alt="Scanner Icon"
      />
      <span class="ml-2 hidden lg:inline">Maintenance</span>
    </NuxtLink>

    <!-- Vehicles -->
    <NuxtLink
      to="/vehicles"
      class="flex items-center justify-center lg:justify-start hover:bg-apple-gray px-3 py-3 rounded-xl transition-colors"
    >
      <TruckIcon class="h-5 w-5 text-gray-black" alt="Scanner Icon" />
      <p class="ml-2 hidden lg:inline">My Vehicles</p>
    </NuxtLink>
  </nav>
</template>

<script setup>
import {
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  TruckIcon,
  HomeIcon,
} from "@heroicons/vue/24/solid";
</script>

<style scoped>
@media (max-width: 1023px) {
  h2 {
    display: none;
  }
  .nuxt-link {
    justify-content: center;
  }
}
</style>
