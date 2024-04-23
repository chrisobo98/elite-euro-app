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
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="mt-4 sm:mt-0">
            <h2 class="text-xl font-semibold">Rafiqur Rahman</h2>
            <p class="text-gray-600">Team Manager</p>
            <p class="text-gray-500">Leeds, United Kingdom</p>
          </div>
        </div>
        <div class="mt-4 sm:mt-0">
          <button
            v-if="!editMode"
            class="flex items-center text-blue-black"
            @click="editMode = true"
          >
            <PencilSquareIcon class="h-5 w-5" />
            Edit
          </button>
          <!-- Save and Cancel Buttons -->
          <div v-else class="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <BaseButton
              @click="saveProfile"
              label="Save"
              icon="check"
              type="submit"
            />
            <BaseButton
              @click="cancelEdit"
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
