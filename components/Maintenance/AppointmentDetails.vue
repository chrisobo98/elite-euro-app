<!-- components/AppointmentDetails.vue -->
<template>
    <div class="appointment-details">
      <p><strong>Date:</strong> {{ appointment.date }}</p>
      <p><strong>Time:</strong> {{ appointment.time }}</p>
      <p><strong>Vehicle VIN:</strong> {{ appointment.vehicle_vin }}</p>
      <p><strong>Service Type:</strong> {{ appointment.service_type }}</p>
      <p><strong>Info:</strong> {{ appointment.info }}</p>
      <div v-if="appointment.image_url" class="mt-4">
        <p><strong>Image:</strong></p>
        <button @click="showImage(appointment.image_url)" class="text-blue-500 underline">
          View Image
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    appointment: {
      type: Object,
      required: true,
    },
    showImage: {
      type: Function,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  .appointment-details {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
  }
  </style>
  