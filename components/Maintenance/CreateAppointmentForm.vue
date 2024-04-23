<template>
  <BaseCard>
    <h2 class="text-lg font-semibold mb-4">Create Appointment</h2>
    <form
      @submit.prevent="submitAppointment"
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <!-- Vehicle Selection -->
      <Dropdown
        v-model="appointmentData.vehicle"
        :options="vehicles"
        optionLabel="name"
        placeholder="Select a Vehicle"
        class="col-span-4 lg:col-span-2"
      />

      <!-- Service Type -->
      <Dropdown
        v-model="appointmentData.serviceType"
        :options="serviceTypes"
        optionLabel="name"
        class="col-span-4 lg:col-span-2"
        placeholder="Select Service Type"
      />

      <!-- Preferred Time -->
      <InputText
        v-model="appointmentData.time"
        class="col-span-4 lg:col-span-2"
        placeholder="Preferred Time (HH:MM)"
      />

      <!-- Preferred Date -->
      <Calendar class="col-span-4 lg:col-span-2" v-model="appointmentData.date" :showIcon="true" />

      <!-- Additional Information -->
      <Textarea
        v-model="appointmentData.info"
        placeholder="Additional Information"
        rows="3"
        class="col-span-4 md:col-span-2 lg:col-span-2"
      />

      <!-- File Upload for Vehicle Images -->
      <FileUpload class="col-span-4 lg:col-span-2" />

      <!-- Submit Button -->
      <BaseButton
        label="Schedule Appointment"
        type="submit"
        class="mt-4 col-span-4"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import FileUpload from "~/components/Vehicle/FileUpload.vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import BaseButton from "~/components/Base/BaseButton.vue";

const vehicles = ref([
  {
    id: "v1",
    name: "BMW 320i - 2019",
  },
  {
    id: "v2",
    name: "Audi A4 - 2020",
  },
]);
const serviceTypes = ref([
  {
    id: "s1",
    name: "Oil Change",
  },
  {
    id: "s2",
    name: "Tire Rotation",
  },
]);

const appointmentData = ref({
  vehicle: null,
  serviceType: null,
  date: null,
  time: "",
  info: "",
});

const submitAppointment = () => {
  // Logic to process the appointment data
  console.log(appointmentData.value);
  // Clear the form or provide a success message
};
</script>
