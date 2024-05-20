<template>
  <h1 class="text-3xl font-bold ml-4">Maintenance</h1>

  <div class="grid grid-cols-1">
    <!-- Appointment Form -->
    <CreateAppointmentForm class="col-span-4 lg:col-span-3" />

    <!-- Past Appointments List -->
    <AppointmentsList class="col-span-4 lg:col-span-2 mx-3" />

    <!-- Appointment Calendar Area -->
    <!-- <AppointmentCalendar class="col-span-4 lg:col-span-3" /> -->

    <!-- Service Documentations -->
    <!-- <ServiceDocumentation class="col-span-4 lg:col-span-2" /> -->
  </div>
</template>

<script setup>
import CreateAppointmentForm from "~/components/Maintenance/CreateAppointmentForm.vue";
import AppointmentCalendar from "~/components/Maintenance/AppointmentCalendar.vue";
import AppointmentsList from "~/components/Maintenance/AppointmentsList.vue";
import ServiceDocumentation from "~/components/Maintenance/ServiceDocumentation.vue";
</script>

<style>
.quick-actions {
  /* Add styling for buttons here */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
