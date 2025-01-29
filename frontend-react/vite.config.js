import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure correct output directory
    emptyOutDir: true, // Clean build directory before building
  },
  server: {
    port: 3000,   // Match with docker-compose.yml
    host: '0.0.0.0', // Allow access inside Docker
    strictPort: true, // Prevents port fallback
  },
});
