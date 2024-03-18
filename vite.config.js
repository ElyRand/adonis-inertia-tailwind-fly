import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/js/app.js', 'resources/css/app.css'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
