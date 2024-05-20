<template>
  <BaseCard>
    <h2 class="text-lg font-semibold mb-4">Appointment Calendar</h2>
    <FullCalendar :options="calendarOptions" />
  </BaseCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import BaseCard from "~/components/Base/BaseCard.vue";


const supabase = useSupabaseClient();
const appointments = ref([]);

// Options for the FullCalendar component
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  events: [],
  editable: true,
  eventLimit: true,
});

// Fetching appointments from Supabase
onMounted(async () => {
  const { data: fetchedAppointments, error } = await supabase
    .from('appointments')
    .select('*');

  if (error) {
    console.error('Error fetching appointments:', error);
    return;
  }

  console.log(fetchedAppointments)

  calendarOptions.events = fetchedAppointments.map(app => ({
    title: app.service_type,
    date: app.date,
    color: "#34bfa3", // Consider dynamically assigning colors based on the type of service
  }));
  console.log(calendarOptions)
});
</script>
