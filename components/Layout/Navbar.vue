<template>
  <header
    class="flex items-center justify-between w-full h-20 pl-8 bg-transparent fixed z-10"
  >
    <!-- Placeholder for the sidebar's width -->
    <div class="w-64"></div>
    
    <!-- search bar -->
    <div class="flex-grow flex justify-center">
        <div class="relative w-1/3">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassCircleIcon class="h-5 w-5 text-gray-500" alt="Search Icon" />
        </div>
        <input
          type="search"
          placeholder="Search For A Vehicle"
          class="block w-full pl-10 pr-10 py-2 rounded-full bg-white shadow-2xl"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <ViewfinderCircleIcon class="h-5 w-5 text-gray-500" alt="Scanner Icon" />
        </div>
      </div>
    </div>

    <!-- Right-aligned icons -->
    <div class="flex space-x-2 px-3">
      <div class="bg-white rounded-full shadow-2xl p-2">
        <MagnifyingGlassCircleIcon
          class="h-6 w-6 text-gray-700"
          alt="Search Icon"
        />
      </div>
      <div class="bg-white rounded-full shadow-2xl p-2">
        <BellIcon class="h-6 w-6 text-gray-700" alt="Notifications Icon" />
      </div>
      <div class="bg-white rounded-full shadow-2xl p-2">
        <UserCircleIcon class="h-6 w-6 text-gray-700" alt="User Profile Icon" />
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  MagnifyingGlassCircleIcon,
  BellIcon,
  UserCircleIcon,
  ViewfinderCircleIcon
} from "@heroicons/vue/24/solid";
</script>
