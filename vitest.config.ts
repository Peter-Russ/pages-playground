import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './__tests__/__vitest__/vitest.setup.ts',
    environment: 'jsdom',
  },
})