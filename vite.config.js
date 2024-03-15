import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ameton/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Точка входа по умолчанию
        delivery: 'modal.html' // Ваша новая страница
      }
    }
  }
});