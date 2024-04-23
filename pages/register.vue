<template>
    <div class="register-container">
      <BaseCard>
        <h1 class="text-3xl text-center font-bold">Elite Euro Motors App</h1>
        <h2 class="text-2xl text-center mb-4">
          Register for an account below
        </h2>
        <form @submit.prevent="signUpNewUser">
          <div class="grid grid-cols-3 gap-4">
            <!-- Password Input -->
            <InputText
              class="inputField col-span-3"
              type="email"
              placeholder="Your email"
              v-model="email"
            />
  
            <InputText
              class="inputField col-span-3"
              type="password"
              placeholder="Your password"
              v-model="password"
            />
  
            <!-- Login Button -->
            <BaseButton
              type="submit"
              class="col-span-3"
              :label="loading ? 'Loading' : 'Create an Account'"
              :disabled="loading"
            />
          </div>
  
          <div class="text-center mt-4">
            <p>
              Already have an account?
              <NuxtLink to="/login" class="text-blue-500" 
                >Log in</NuxtLink
              >
            </p>
          </div>
        </form>
      </BaseCard>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BaseButton from "~/components/Base/BaseButton.vue";
  import BaseCard from "~/components/Base/BaseCard.vue";
  import InputText from "primevue/inputtext";
  
  const supabase = useSupabaseClient();
  
  const loading = ref(false);
  const email = ref("");
  const password = ref("");
  
  console.log(email);
  console.log(password);
  
  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    
    // Redirect to login
    await navigateTo({ path: '/login' })
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 600px;
    margin: auto;
    padding-top: 5rem;
  }
  </style>
  