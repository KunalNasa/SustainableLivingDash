import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.eia.gov/',
        changeOrigin: true,
        secure: true, // set to true if your API uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
