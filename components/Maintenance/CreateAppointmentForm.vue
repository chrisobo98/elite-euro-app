<template>
  <BaseCard>
    <h2 class="text-lg font-semibold mb-4">Create Appointment</h2>
    <form
      @submit.prevent="submitAppointment"
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <!-- Select Vehicle -->
      <Dropdown
        v-model="selectedVehicleId"
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
      <Calendar
        class="col-span-4 lg:col-span-2"
        v-model="appointmentData.date"
        :showIcon="true"
      />

      <!-- Additional Information -->
      <Textarea
        v-model="appointmentData.info"
        placeholder="Additional Information"
        rows="3"
        class="col-span-4 md:col-span-2 lg:col-span-2"
      />

      <!-- File Upload for Vehicle Images -->
      <input
        type="file"
        @change="onFileChange"
        accept="image/*"
        class="col-span-4 lg:col-span-2"
      />

      <!-- Submit Button -->
      <BaseButton
        label="Schedule Appointment"
        type="submit"
        class="mt-auto col-span-4"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import BaseButton from '~/components/Base/BaseButton.vue';

const user = useSupabaseUser().value;
const supabase = useSupabaseClient();

const selectedVehicleId = ref(null);
const appointmentData = ref({
  vehicleVin: '',
  serviceType: null,
  date: null,
  time: '',
  info: '',
  imageUrl: '',
});

const vehicles = ref([]);
const serviceTypes = ref([
  { id: 's1', name: 'Oil Change' },
  { id: 's2', name: 'Brake Inspection and Repair' },
  { id: 's3', name: 'Tire Rotation and Alignment' },
  { id: 's4', name: 'Engine Diagnostic' },
  { id: 's5', name: 'Transmission Service' },
  { id: 's6', name: 'Pre-Purchase Inspection' },
  { id: 's7', name: 'Service A (Basic Maintenance)' },
  { id: 's8', name: 'Service B (Advanced Maintenance)' },
  { id: 's9', name: 'Service Light Reset' },
  { id: 's10', name: 'Electrical System Diagnostic' },
]);

watch(selectedVehicleId, (newValue) => {
  const vehicle = vehicles.value.find(v => v.id === newValue.id || '');
  console.log(vehicle)
  appointmentData.value.vehicleVin = vehicle ? vehicle.vin : '';
  console.log('Selected VIN:', appointmentData.value.vehicleVin);
});

onMounted(async () => {
  await fetchVehicles();
});

async function fetchVehicles() {
  const { data, error } = await supabase
    .from('vehicles')
    .select('id, make, model, year, vin')
    .eq('user_id', user.id);

  if (error) {
    console.error('Error fetching vehicles:', error.message);
  } else {
    vehicles.value = data.map(vehicle => ({
      ...vehicle,
      name: `${vehicle.make} ${vehicle.model} - ${vehicle.year}`,
    }));
  }
}

const onFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const fileName = `${user.id}/${file.name}`;

  const { data, error } = await supabase
    .storage
    .from('Customer-Images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Error uploading file:', error.message);
  } else {
    const filePath = data.fullPath; // Get the file path from the response data
    const publicURL = `https://kunszttmzmezybptbfbj.supabase.co/storage/v1/object/public/${filePath}`;
    appointmentData.value.imageUrl = publicURL;
    console.log('Public URL:', publicURL);
  }
};

const submitAppointment = async () => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          user_id: user.id,
          vehicle_vin: appointmentData.value.vehicleVin,
          service_type: appointmentData.value.serviceType.name,
          date: appointmentData.value.date,
          time: appointmentData.value.time,
          info: appointmentData.value.info,
          image_url: appointmentData.value.imageUrl,
        },
      ]);

    if (error) {
      console.error('Error creating appointment:', error.message);
    } else {
      console.log('Appointment created successfully:', data);
      resetForm();
    }
  } catch (error) {
    console.error('Error submitting appointment:', error);
  }
};

const resetForm = () => {
  selectedVehicleId.value = null;
  appointmentData.value = {
    vehicleVin: '',
    serviceType: null,
    date: null,
    time: '',
    info: '',
    imageUrl: '',
  };
};
</script>
