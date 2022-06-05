import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  srcDir: 'src',
  publicRuntimeConfig: {
    serverUrl: process.env.SERVER_URL || 'http://localhost:3000',
    projectName: 'Test App',
  },
})
