import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  // Base relativa: los assets se resuelven respecto a index.html, así funciona
  // tanto en localhost como en GitHub Pages bajo /usuario.github.io/repo/.
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      // Debe coincidir con "paths" de tsconfig.json
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // host: true expone el server en todas las interfaces de red (acceso por IP/LAN)
    host: true,
    port: 5173,
    open: true,
  },
  preview: {
    // Sirve el build de producción (carpeta dist) expuesto en la red
    host: true,
    port: 4173,
  },
});
