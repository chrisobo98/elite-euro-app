<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold ml-4">My Profile</h1>

    <!-- Profile Picture and Edit Card -->
    <BaseCard>
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <div
          class="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left"
        >
          <img
            class="inline-block h-24 w-24 rounded-full ring-2 ring-white mx-auto sm:mx-0"
            src="https://i.ibb.co/TLxgMwW/T03-E1-AWDP-UF2-JJNFRS-f53e19ccd891-512.jpg"
            alt=""
          />
          <div class="mt-4 sm:mt-0">
            <h2 class="text-xl font-semibold">Christopher Bermudez</h2>
            <p class="text-gray-600">Elite Euro Motors</p>
            <p class="text-gray-500">Ocoee, Florida</p>
          </div>
        </div>
        <div class="mt-4 sm:mt-0">
          <div v-if="!editMode" class="grid grid-cols-2">
            <!-- Edit Button -->
            <button
              v-if="!editMode"
              class="flex items-center text-blue-black"
              @click="editMode = true"
            >
              <PencilSquareIcon class="h-5 w-5" />
              Edit
            </button>

            <!-- Login Button -->
            <BaseButton
              type="submit"
              @click="signOut"
              class="col-span-1 my-3"
              :label="loading ? 'Loading' : 'Logout'"
              :disabled="loading"
            />
          </div>
          <!-- Save and Cancel Buttons -->
          <div v-else class="grid gap-4 lg:grid-cols-1 grid-cols-2">
            <BaseButton
              @click="saveProfile"
              label="Save"
              icon="check"
              type="submit"
            />
            <BaseButton
              @click="saveProfile"
              label="Cancel"
              icon="x-mark"
              type="reset"
            />
          </div>
        </div>
      </div>
    </BaseCard>

    <!-- Personal Information Card -->
    <BaseCard>
      <h3 class="text-lg font-semibold mb-4">Personal Information</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EditableField
          v-for="(value, key) in personalInfo"
          :key="key"
          :field="key"
          :label="getDisplayName(key)"
          :value="value"
          :editMode="editMode"
          @updateValue="updatePersonalInfo"
        />
      </div>
    </BaseCard>

    <!-- Address Information Card -->
    <BaseCard>
      <h3 class="text-lg font-semibold mb-4">Address</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EditableField
          v-for="(value, key) in addressInfo"
          :key="key"
          :field="key"
          :label="getDisplayName(key)"
          :value="value"
          :editMode="editMode"
          @updateValue="updateAddressInfo"
        />
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "@/components/Base/BaseCard.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import EditableField from "@/components/Base/EditableField.vue";
import { camelCaseToTitleCase } from "@/utils/utils.js";
import { PencilSquareIcon } from "@heroicons/vue/24/solid";
import { ref, reactive } from "vue";

const supabase = useSupabaseClient();

const editMode = ref(false);
const personalInfo = reactive({
  firstName: "John",
  lastName: "Doe",
  role: "Developer",
  email: "john@example.com",
  phone: "+123456789",
});
const addressInfo = reactive({
  country: "USA",
  city: "Clermont",
  state: "Florida",
  address: "3241 Weltzer Lane",
});

function toggleEdit() {
  editMode.value = !editMode.value;
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  await navigateTo({ path: "/login" });
}

function updatePersonalInfo(field, value) {
  personalInfo[field] = value;
}

function updateAddressInfo(field, value) {
  addressInfo[field] = value;
}

function saveProfile() {
  console.log("Profile data to save:", personalInfo);
  // Here we send a request to backend to update the user profile
  editMode.value = false;
}

// A method to get a display name from a camelCase string
function getDisplayName(key) {
  return camelCaseToTitleCase(key);
}
</script>
