import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// Vite configuration: enable React plugin and Tailwind CSS integration
export default defineConfig({
  plugins: [react(), tailwind()],
})