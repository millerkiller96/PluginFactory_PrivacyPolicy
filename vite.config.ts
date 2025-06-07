import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths for better compatibility across different hosting environments
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});