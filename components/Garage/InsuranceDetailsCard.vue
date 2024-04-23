<template>
    <BaseCard>
      <h2 class="text-xl font-semibold">Insurance Details</h2>
      <p>Provider: Geico</p>
      <p>Policy #: 123456789</p>
      <p>Expires: 09/15/2022</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 my-4">
      <BaseButton label="Renew Policy" class="mt-4 col-span-2 md:col-span-3 lg:col-span-2" />
      </div>
    </BaseCard>
  </template>

<script setup>
import BaseCard from '@/components/Base/BaseCard.vue';
</script>
  