import { defineConfig } from 'astro/config';

export default defineConfig({
  // Pass configuration directly to Vite's bundler core
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Instructs Vite to use the modern Sass compiler API
          api: 'modern-compiler', 
        },
      },
    },
  },
});
