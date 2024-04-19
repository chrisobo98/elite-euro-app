<template>
  <nav class="h-20 w-full flex items-center px-4">
    <!-- search bar -->
    <div class="flex-grow flex justify-center">
      <div class="relative lg:w-1/3 md:1/3 w-full">
        <!-- Magnifying glass -->
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <MagnifyingGlassCircleIcon
            class="h-5 w-5 text-gray-500"
            alt="Search Icon"
          />
        </div>
        <!-- Input Search Box -->
        <input
          type="search"
          placeholder="Search For A Vehicle"
          class="block w-full pl-10 pr-10 py-2 rounded-full bg-white shadow-2xl"
        />
        <!-- Scanner Icon -->
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <ViewfinderCircleIcon
            class="h-5 w-5 text-gray-500"
            alt="Scanner Icon"
          />
        </div>
      </div>
    </div>

    <!-- Right-aligned icons -->
    <div class="flex space-x-2 px-3">
      <!-- Notifications -->
      <NuxtLink
        to="/notifications"
        class="bg-white rounded-full shadow-2xl p-2"
      >
        <BellIcon class="h-6 w-6 text-gray-700" alt="Notifications Icon" />
      </NuxtLink>

      <!-- User Icon -->
      <NuxtLink
        to="/account"
        class="bg-white rounded-full shadow-2xl p-2"
      >
        <UserCircleIcon class="h-6 w-6 text-gray-700" alt="User Profile Icon" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import {
  MagnifyingGlassCircleIcon,
  BellIcon,
  UserCircleIcon,
  ViewfinderCircleIcon,
} from "@heroicons/vue/24/solid";
</script>
