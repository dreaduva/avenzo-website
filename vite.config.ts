import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Set base path for deployment (e.g. '/my-site/' for GitHub Pages)
  // base: '/avenzo-website/',
  server: {
    allowedHosts: true,
  },
})
