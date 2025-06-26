import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: resolve(process.cwd(), 'client'),
  build: {
    outDir: resolve(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'client/index.html')
    }
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'client/src'),
      '@shared': resolve(process.cwd(), 'shared')
    }
  }
})