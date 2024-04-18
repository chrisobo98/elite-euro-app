<template>
  <div class="flex h-screen w-screen bg-apple-gray">
    <Sidebar class="ml-4 py-4 px-4" />
    <div class="flex flex-col flex-grow">
      <Navbar />
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Layout/Navbar.vue';
import Sidebar from '~/components/Layout/Sidebar.vue';
import Footer from '~/components/Layout/Footer.vue';
</script>
