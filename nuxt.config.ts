// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@nuxt/eslint',
    'nuxt-primevue',
    // ...
  ],
  css: [
    '~/assets/css/main.css',
      'primevue/resources/themes/saga-green/theme.css',
      'primevue/resources/primevue.css',
      'primeicons/primeicons.css'
  ],
  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
