<template>
    <BaseCard>
      <h2 class="text-xl font-semibold">Maintenance History</h2>
      <ul>
        <li>Last service: Oil Change - 03/01/2022</li>
        <!-- More list items -->
      </ul>
      <div class="grid grid-cols-1 lg:grid-cols-3 my-4">

      <BaseButton label="Book next appointment" class="mt-4 col-span-2 md:col-span-3 lg:col-span-2" />
      </div>
    </BaseCard>
  </template>

<script setup>
import BaseCard from '@/components/Base/BaseCard.vue';
</script>
  