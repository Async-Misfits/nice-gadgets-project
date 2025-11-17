import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: mode === 'production' ? '/phone-catalog/' : '/',
  server: {
    open: true, // 👈 Відкриє браузер автоматично
  },
}));
