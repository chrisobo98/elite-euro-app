<template>
  <div v-if="user" class="flex h-screen bg-apple-gray overflow-hidden">
    <!-- Navbar -->
    <header class="fixed top-0 right-0 left-24 lg:left-64 h-20">
      <Navbar />
    </header>

    <!-- Side Nav -->
    <aside
      class="fixed top-4 bottom-4 left-4 w-auto lg:w-64 bg-white shadow-2xl"
      style="border-radius: 50px"
    >
      <Sidebar />
    </aside>

    <!-- Content area -->
    <div class="flex flex-col flex-grow pl-8 lg:pl-56">
      <main class="pt-20 flex-grow overflow-auto pl-12">
        <NuxtPage />
      </main>

      <!-- Footer: Fixed at the bottom -->
      <footer class="flex justify-end h-8 mx-4 my-4">
        <span class="text-black">© 2024 Elite Euro Motors. Made with ❤️ in Orlando, FL.</span>
      </footer>
    </div>
  </div>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import Navbar from "~/components/Layout/Navbar.vue";
import Sidebar from "~/components/Layout/Sidebar.vue";

const user = useSupabaseUser()
</script>

<style>
/* Ensure body takes full height */
html,
body {
  height: 100%;
  margin: 0;
}
</style>
