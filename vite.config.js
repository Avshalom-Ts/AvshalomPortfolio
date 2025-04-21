import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  preview:{
    host: 'avshalom-folio.com',
    open: true,
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
