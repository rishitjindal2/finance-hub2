// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/finance-hub2/', // ✅ this must match your repo name
  plugins: [react()],
})
