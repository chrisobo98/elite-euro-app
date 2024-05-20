<template>
  <BaseCard class="appointments">
    <h2 class="text-lg font-semibold mb-2">Appointments</h2>
    <Accordion>
      <AccordionTab header="Future Appointments">
        <Accordion v-model="futureActiveIndex">
          <AccordionTab
            v-for="(appointment, index) in futureAppointments"
            :key="appointment.id"
            :header="'Appointment on ' + appointment.date">
            <AppointmentDetails :appointment="appointment" :showImage="showImage" />
          </AccordionTab>
        </Accordion>
        <div v-if="futureAppointments.length === 0">
          <p>No future appointments.</p>
        </div>
      </AccordionTab>
      <AccordionTab header="Past Appointments">
        <Accordion v-model="pastActiveIndex">
          <AccordionTab
            v-for="(appointment, index) in pastAppointments"
            :key="appointment.id"
            :header="'Appointment on ' + appointment.date">
            <AppointmentDetails :appointment="appointment" :showImage="showImage" />
          </AccordionTab>
        </Accordion>
        <div v-if="pastAppointments.length === 0">
          <p>No past appointments.</p>
        </div>
      </AccordionTab>
    </Accordion>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="[selectedImage]"
      @hide="visible = false"
    />
  </BaseCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import VueEasyLightbox from 'vue-easy-lightbox';
import AppointmentDetails from '~/components/Maintenance/AppointmentDetails.vue';

const supabase = useSupabaseClient();
const pastAppointments = ref([]);
const futureAppointments = ref([]);
const futureActiveIndex = ref(null); // Manage open tab state for future appointments
const pastActiveIndex = ref(null);  // Manage open tab state for past appointments
const visible = ref(false);
const selectedImage = ref('');

const showImage = (url) => {
  selectedImage.value = url;
  visible.value = true;
};

onMounted(async () => {
  await fetchAppointments();
});

async function fetchAppointments() {
  let { data: appointments, error } = await supabase
    .from('appointments')
    .select('*');

  if (error) {
    console.error('Error fetching appointments:', error);
    return;
  }

  const today = new Date();
  pastAppointments.value = appointments.filter(
    appointment => new Date(appointment.date) < today
  );
  futureAppointments.value = appointments.filter(
    appointment => new Date(appointment.date) >= today
  );
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
