import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/jobs': 'http://localhost:3000',
      // add more API routes here if needed later
    },
  },
});