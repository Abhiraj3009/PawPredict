import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This polyfills 'process.env' for libraries or code that still uses it
    'process.env': {},
  },
});