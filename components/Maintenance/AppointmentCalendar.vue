<template>
  <BaseCard>
    <h2 class="text-lg font-semibold mb-4">Appointment Calendar</h2>
    <FullCalendar :events="appointments" :options="calendarOptions" />
  </BaseCard>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import { ref } from "vue";
import BaseCard from "~/components/Base/BaseCard.vue";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Sample appointments (you should fetch this from your backend)
const appointments = ref([
  { title: "Oil Change", start: new Date().toISOString(), color: "#34bfa3" },
  { title: "Tire Check", start: new Date().toISOString(), color: "#f4516c" },
  // ...other appointments
]);

// Options for the FullCalendar component
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  defaultView: "dayGridMonth",
  header: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  editable: true,
  eventLimit: true,
});
</script>
