<template>
  <div class="my-vehicles">
    <h1 class="text-3xl font-bold ml-4">My Vehicles</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <!-- Vehicle Model and VIN Entry -->
      <BaseCard class="space-y-4 col-span-1">
        <h2 class="text-lg font-semibold">Add Vehicle</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3">
          <InputText
            placeholder="Vehicle VIN"
            v-model="vehicleModel"
            class="col-span-3"
          />
          <BaseButton
            label="Check VIN"
            @click="checkVIN"
            class="col-span-3 sm:col-start-2 my-3"
          />
        </div>
      </BaseCard>

      <!-- Manually Add Vehicle Details -->
      <BaseCard v-if="!vinValid" class="space-y-4 col-span-1 lg:col-span-2">
        <h2 class="text-lg font-semibold">Vehicle Details</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText placeholder="Make" v-model="vehicleDetails.make" />
          <InputText placeholder="Model" v-model="vehicleDetails.model" />
          <InputText placeholder="Year" v-model="vehicleDetails.year" />
          <!-- File Upload for Vehicle Images -->
          <div class="md:col-span-2">
            <FileUpload />
          </div>
          <BaseButton
            label="Save Vehicle"
            @click="saveVehicle"
            class="md:col-span-2"
          />
        </div>
      </BaseCard>

      <!-- Existing Vehicles List -->
      <BaseCard class="space-y-4 col-span-1 lg:col-span-3">
        <h2 class="text-lg font-semibold mb-4">Existing Vehicles</h2>
        <ul>
          <li
            v-for="vehicle in vehicles"
            :key="vehicle.id"
            class="flex justify-between items-center p-4 border rounded-lg my-2 py-2"
          >
            {{ vehicle.make }} {{ vehicle.model }} - {{ vehicle.year }}
            <button
              @click="confirmDelete(vehicle.id)"
              class="rounded bg-red-500 hover:bg-red-700 text-white p-1"
            >
              <span class="pi pi-times"></span>
            </button>
          </li>
        </ul>
      </BaseCard>

      <!-- Delete Confirmation Dialog -->
      <Dialog
        v-model:visible="deleteDialogVisible"
        :modal="true"
        :style="{ width: '25rem' }"
        header="Confirm Delete"
      >
        <span class="p-text-secondary block mb-5"
          >Type 'Delete' to confirm</span
        >
        <div class="flex align-items-center gap-3 mb-3">
          <InputText v-model="deleteConfirmationText" class="flex-auto" />
        </div>

        <template #footer>
          <div class="flex justify-content-end gap-2">
            <Button
              type="button"
              label="Cancel"
              severity="secondary"
              @click="cancelDelete"
            ></Button>
            <Button
              label="Delete"
              type="button"
              :disabled="deleteConfirmationText.toLowerCase() !== 'delete'"
              @click="performDelete"
            ></Button>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FileUpload from "~/components/Vehicle/FileUpload.vue";
import BaseButton from "~/components/Base/BaseButton.vue";
import BaseCard from "~/components/Base/BaseCard.vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

const vehicleModel = ref("");
const vehicleVIN = ref("");
const vinValid = ref(false);
const vehicleDetails = ref({
  make: "",
  model: "",
  year: "",
  // other details
});

const value = ref(null);

const deleteDialogVisible = ref(false);
const deleteConfirmationText = ref("");
let vehicleToDelete = ref(null);

const confirmDelete = (id) => {
  vehicleToDelete.value = id;
  deleteDialogVisible.value = true;
};

const cancelDelete = () => {
  deleteDialogVisible.value = false;
  deleteConfirmationText.value = "";
  vehicleToDelete.value = null;
};

const performDelete = () => {
  if (deleteConfirmationText.value.toLowerCase() === "delete") {
    vehicles.value = vehicles.value.filter(
      (vehicle) => vehicle.id !== vehicleToDelete.value
    );
    cancelDelete();
  }
};

const vehicles = ref([
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: "2019",
    vin: "WBA8D9C56JEA12345",
  },
  { id: 7, make: "Audi", model: "A4", year: "2020", vin: "WAUENAF41LA123456" },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: "2018",
    vin: "55SWF4JB1JU123456",
  },
]);

const checkVIN = () => {
  // Function to validate VIN and fetch vehicle details
};

const saveVehicle = () => {
  // Function to save the vehicle details entered manually
};
</script>
