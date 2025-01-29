import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change default output directory to 'build'
    emptyOutDir: true, // Ensure the directory is cleared before building
  },
  server: {
    port: 3000, // Optional: Change the development server port if needed
  },
});
