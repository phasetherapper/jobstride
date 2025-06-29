import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/jobs': 'http://localhost:3000',
    },
    allowedHosts: ['jobstride-frontend-production.up.railway.app'], // ✅ Add your Railway domain here
  },
});