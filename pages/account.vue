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
            <h2 class="text-xl font-semibold">{{ personalInfo.fullName }}</h2>
            <p class="text-gray-600">{{ personalInfo.email }}</p>
            <p class="text-gray-500">{{ addressInfo.city }}, {{ addressInfo.state }} </p>
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
              @click="updateProfile"
              label="Save"
              icon="check"
              type="submit"
            />
            <BaseButton
              @click="editMode = false"
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
import { ref, reactive, onMounted } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser().value;

const editMode = ref(false);
const personalInfo = reactive({
  // Assume these are bound to form inputs
  username: "",
  fullName: "",
  email: user.email, // email is typically not editable
  website: "",
  avatar_url: "",
});
const addressInfo = reactive({
  country: "",
  city: "",
  state: "",
  address: "",
});

onMounted(async () => {
  if (user) {
    await fetchProfile();
  }
});
async function fetchProfile() {
  try {
    let { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id) // Make sure to only fetch the profile of the logged-in user.
      .single(); // Ensures that only one record is returned (or null if not found).;
    if (error) throw error;

    if (data) {
      // Assign data to the reactive objects
      personalInfo.username = data.username || "";
      personalInfo.fullName = data.full_name || "";
      personalInfo.website = data.website || "";
      personalInfo.avatar_url = data.avatar_url || "";
      
      // Address Info
      addressInfo.country = data.country || "";
      addressInfo.city = data.city || "";
      addressInfo.state = data.state || "";
      addressInfo.address = data.address || "";
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("loading done");
  }
}

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

async function updateProfile() {
  try {
    const updates = {
      id: user.id,
      username: personalInfo.username,
      full_name: personalInfo.fullName,
      website: personalInfo.website,
      avatar_url: personalInfo.avatar_url,
      country: addressInfo.country,
      city: addressInfo.city,
      state: addressInfo.state,
      address: addressInfo.address,
      updated_at: new Date(),
    };
    const { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the updated values
    });
    if (error) throw error;
    editMode.value = false;
  } catch (error) {
    console.log(error);
  }
}

// A method to get a display name from a camelCase string
function getDisplayName(key) {
  return camelCaseToTitleCase(key);
}
</script>
