// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/finance-hub2/', // 👈 MUST match your GitHub repo name exactly
  plugins: [react()],
})
