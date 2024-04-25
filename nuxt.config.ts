// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      VIN_KEY: process.env.VIN_KEY,
      VIN_HOST: process.env.VIN_HOST,
    },
  },
  devtools: { enabled: true },
  modules: [
    // ...
    "@nuxt/eslint",
    "nuxt-primevue",
    "@nuxtjs/supabase",
    "@nuxtjs/supabase",
    // ...
  ],
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/saga-green/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/register", "/login"],
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
