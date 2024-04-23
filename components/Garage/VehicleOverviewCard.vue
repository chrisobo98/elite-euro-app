<template>
    <BaseCard class="min-h-[200px] h-auto">
      <h2 class="text-xl font-semibold">Vehicle Overview</h2>
      <img src="https://i.ibb.co/ZTCP2mT/pexels-sourav-mishra-15170387.jpg" alt="Vehicle" class="w-full object-cover h-40 w-auto rounded-lg my-4"/>
      <p>Make: Tesla</p>
      <p>Model: Model S</p>
      <p>Year: 2021</p>
      <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 my-4">
        <BaseButton label="View details" />
        <BaseButton label="Schedule service" />
        <BaseButton label="Sell vehicle" />
      </div>
    </BaseCard>
  </template>

<script setup>
import BaseCard from '@/components/Base/BaseCard.vue';
</script>
  