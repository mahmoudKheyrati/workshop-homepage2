// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/workshop-in-memory-workshop-webpage/',  // <- set this to your GitHub Pages repo path
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
});