import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  preview:{
    host: 'localhost',
    allowedHosts: [
      'avshalom-folio.com',
      'www.avshalom-folio.com',
      'localhost',
    ]
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
