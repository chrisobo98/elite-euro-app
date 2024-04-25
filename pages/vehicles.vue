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
            v-model="vehicleVIN"
            class="col-span-3"
          />
          <BaseButton
            label="Check VIN"
            @click="checkVIN"
            class="col-span-3 sm:col-start-2 my-3"
          />
        </div>
        <img
          class="rounded-3xl"
          :src="vehicleDetails.vehicle_image"
          alt="image description"
        />
      </BaseCard>

      <!-- Manually Add Vehicle Details -->
      <BaseCard class="space-y-4 col-span-1 lg:col-span-2">
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
import { ref, reactive, onMounted } from "vue";
import FileUpload from "~/components/Vehicle/FileUpload.vue";
import BaseButton from "~/components/Base/BaseButton.vue";
import BaseCard from "~/components/Base/BaseCard.vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import axios from "axios";

const user = useSupabaseUser().value;
const supabase = useSupabaseClient();
const value = ref(null);

const vehicles = ref([]);
const vehicleModel = ref("");
const vehicleVIN = ref("");
const vinValid = ref(false);
const vehicleDetails = reactive({
  make: "",
  model: "",
  year: "",
  vehicle_image: "https://i.ibb.co/c3BnpVj/elementor-placeholder-image.webp",
  air_bag_loc_curtain: "",
  air_bag_loc_front: "",
  air_bag_loc_side: "",
  body_class: "",
  displacement_cc: "",
  displacement_ci: "",
  displacement_l: "",
  doors: "",
  drive_type: "",
  engine_configuration: "",
  engine_cylinders: "",
  engine_hp: "",
  engine_kw: "",
  engine_model: "",
  fuel_type_primary: "",
  gvwr: "",
  make: "",
  make_id: "",
  manufacturer: "",
  manufacturer_id: "",
  model: "",
  model_id: "",
  model_year: "",
  other_restraint_system_info: "",
  plant_city: "",
  plant_country: "",
  plant_state: "",
  seat_belts_all: "",
  series: "",
  tpms: "",
  transmission_style: "",
  vin: "",
  valve_train_design: "",
  vehicle_descriptor: "",
  vehicle_type: "",
  // other details
});

onMounted(async () => {
  await fetchVehicles();
});

async function fetchVehicles() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching vehicles:", error.message);
    return;
  }

  vehicles.value = data;
}

const checkVIN = async () => {
  const options = {
    method: "GET",
    url: "https://cis-vin-decoder.p.rapidapi.com/vinDecode",
    params: { vin: vehicleVIN.value },
    headers: {
      "X-RapidAPI-Key": "a0a95ce2fdmsheede7e89e16b23cp179677jsncff46452df5d",
      "X-RapidAPI-Host": "cis-vin-decoder.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (response.data) {
      // Response data from checkVIN API
      const spec = response.data.data;

      vehicleDetails.make = spec.Make;
      vehicleDetails.model = spec.Model;
      vehicleDetails.year = spec.ModelYear;
      vehicleDetails.air_bag_loc_curtain = spec.AirBagLocCurtain;
      vehicleDetails.air_bag_loc_front = spec.AirBagLocFront;
      vehicleDetails.air_bag_loc_side = spec.AirBagLocSide;
      vehicleDetails.body_class = spec.BodyClass;
      vehicleDetails.displacement_cc = spec.DisplacementCC;
      vehicleDetails.displacement_ci = spec.DisplacementCI;
      vehicleDetails.displacement_l = spec.DisplacementL;
      vehicleDetails.doors = spec.Doors;
      vehicleDetails.drive_type = spec.DriveType;
      vehicleDetails.engine_configuration = spec.EngineConfiguration;
      vehicleDetails.engine_cylinders = spec.EngineCylinders;
      vehicleDetails.engine_hp = spec.EngineHP;
      vehicleDetails.engine_kw = spec.EngineKW;
      vehicleDetails.engine_model = spec.EngineModel;
      vehicleDetails.fuel_type_primary = spec.FuelTypePrimary;
      vehicleDetails.gvwr = spec.GVWR;
      vehicleDetails.make = spec.Make;
      vehicleDetails.make_id = spec.MakeID;
      vehicleDetails.manufacturer = spec.Manufacturer;
      vehicleDetails.manufacturer_id = spec.ManufacturerId;
      vehicleDetails.model = spec.Model;
      vehicleDetails.model_id = spec.ModelID;
      vehicleDetails.model_year = spec.ModelYear;
      vehicleDetails.other_restraint_system_info =
        spec.OtherRestraintSystemInfo;
      vehicleDetails.plant_city = spec.PlantCity;
      vehicleDetails.plant_country = spec.PlantCountry;
      vehicleDetails.plant_state = spec.PlantState;
      vehicleDetails.seat_belts_all = spec.SeatBeltsAll;
      vehicleDetails.series = spec.Series;
      vehicleDetails.tpms = spec.TPMS;
      vehicleDetails.transmission_style = spec.TransmissionStyle;
      vehicleDetails.vin = spec.VIN;
      vehicleDetails.valve_train_design = spec.ValveTrainDesign;
      vehicleDetails.vehicle_descriptor = spec.VehicleDescriptor;
      vehicleDetails.vehicle_type = spec.VehicleType;

      vinValid.value = true; // Set to true if VIN is valid

      // Vehicle String that formats google search
      const vehicleString = `Transparent ${vehicleDetails.make} ${vehicleDetails.model} ${vehicleDetails.year}`;

      // Google image search
      const imageOptions = {
        method: "POST",
        url: "https://google-api31.p.rapidapi.com/imagesearch",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "a0a95ce2fdmsheede7e89e16b23cp179677jsncff46452df5d",
          "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
        },
        data: {
          text: vehicleString,
          safesearch: "off",
          region: "wt-wt",
          color: "",
          size: "",
          type_image: "",
          layout: "",
          max_results: 1,
        },
      };

      const imageResponse = await axios.request(imageOptions);

      vehicleDetails.vehicle_image = imageResponse.data.result[0].image || null;
    } else {
      // Handle the case where the VIN is not valid
      vinValid.value = false;
    }
  } catch (error) {
    console.error(error);
  }
};

async function saveVehicle() {
  try {
    const updates = {
      id: user.id,
      user_id: user.id,
      make: vehicleDetails.make,
      model: vehicleDetails.model,
      year: vehicleDetails.year,
      air_bag_loc_curtain: vehicleDetails.air_bag_loc_curtain,
      air_bag_loc_front: vehicleDetails.air_bag_loc_front,
      air_bag_loc_side: vehicleDetails.air_bag_loc_side,
      body_class: vehicleDetails.body_class,
      displacement_cc: vehicleDetails.displacement_cc,
      displacement_ci: vehicleDetails.displacement_ci,
      displacement_l: vehicleDetails.displacement_l,
      doors: vehicleDetails.doors,
      drive_type: vehicleDetails.drive_type,
      engine_configuration: vehicleDetails.engine_configuration,
      engine_cylinders: vehicleDetails.engine_cylinders,
      engine_hp: vehicleDetails.engine_hp,
      engine_kw: vehicleDetails.engine_kw,
      engine_model: vehicleDetails.engine_model,
      fuel_type_primary: vehicleDetails.fuel_type_primary,
      gvwr: vehicleDetails.gvwr,
      make_id: vehicleDetails.make_id,
      manufacturer: vehicleDetails.manufacturer,
      manufacturer_id: vehicleDetails.manufacturer_id,
      model_id: vehicleDetails.model_id,
      model_year: vehicleDetails.model_year,
      other_restraint_system_info: vehicleDetails.other_restraint_system_info,
      plant_city: vehicleDetails.plant_city,
      plant_country: vehicleDetails.plant_country,
      plant_state: vehicleDetails.plant_state,
      seat_belts_all: vehicleDetails.seat_belts_all,
      series: vehicleDetails.series,
      tpms: vehicleDetails.tpms,
      transmission_style: vehicleDetails.transmission_style,
      vin: vehicleDetails.vin,
      valve_train_design: vehicleDetails.valve_train_design,
      vehicle_descriptor: vehicleDetails.vehicle_descriptor,
      vehicle_type: vehicleDetails.vehicle_type,
    };

    const { error } = await supabase.from("vehicles").upsert(updates, {
      returning: "minimal", // Don't return the updated values
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  } finally {
    await fetchVehicles();
  }
}

const deleteDialogVisible = ref(false);
const deleteConfirmationText = ref("");
const vehicleToDelete = ref(null);

function confirmDelete(id) {
  console.log(id)
  vehicleToDelete.value = id;
  console.log(vehicleToDelete)
  deleteDialogVisible.value = true;
}

function cancelDelete() {
  deleteDialogVisible.value = false;
  deleteConfirmationText.value = "";
  vehicleToDelete.value = null;
}

async function performDelete() {
  if (deleteConfirmationText.value.toLowerCase() === "delete") {
    console.log(vehicleToDelete.value)
    const { error } = await supabase.from("vehicles").delete().match({ id: vehicleToDelete.value });
    if (!error) {
      await fetchVehicles();  // Refetch the vehicles list to update UI
      cancelDelete();
    } else console.error("Error deleting vehicle:", error);
  }
}
</script>
