import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log('Loaded vitest config');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.js',
  }
});
