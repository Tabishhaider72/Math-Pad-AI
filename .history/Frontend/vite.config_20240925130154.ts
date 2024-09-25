import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'frontend',  // Set the correct root folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./dist"),
    },
  },
});
