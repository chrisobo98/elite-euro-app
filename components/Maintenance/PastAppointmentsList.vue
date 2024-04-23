<template>
    <BaseCard class="past-appointments">
      <h2 class="text-lg font-semibold mb-4">Past Appointments</h2>
      <Accordion>
        <AccordionTab v-for="appointment in pastAppointments" :key="appointment.id" :header="appointment.title">
          <div class="appointment-details">
            <p><strong>Date:</strong> {{ appointment.date }}</p>
            <p><strong>Vehicle:</strong> {{ appointment.vehicle }}</p>
            <p><strong>Service Type:</strong> {{ appointment.serviceType }}</p>
            <p><strong>Notes:</strong> {{ appointment.notes }}</p>
          </div>
        </AccordionTab>
      </Accordion>
    </BaseCard>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Accordion from 'primevue/accordion';
  import AccordionTab from 'primevue/accordiontab';
  
  const pastAppointments = ref([
    {
      id: 1,
      title: 'Oil Change - BMW 320i',
      date: '2021-04-20',
      vehicle: 'BMW 320i - 2019',
      serviceType: 'Oil Change',
      notes: 'Changed oil and filters.'
    },
    {
      id: 1,
      title: 'Oil Change - BMW 320i',
      date: '2021-04-20',
      vehicle: 'BMW 320i - 2019',
      serviceType: 'Oil Change',
      notes: 'Changed oil and filters.'
    },
    {
      id: 1,
      title: 'Oil Change - BMW 320i',
      date: '2021-04-20',
      vehicle: 'BMW 320i - 2019',
      serviceType: 'Oil Change',
      notes: 'Changed oil and filters.'
    },
    // More past appointments...
  ]);
  </script>
  
  <style>
  /* Add additional styles if needed */
  </style>
  