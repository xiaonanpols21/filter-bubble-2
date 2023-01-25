// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        choose: resolve(__dirname, 'main.html'),
        d3: resolve(__dirname, 'd3.html')
      }
    }
  }
})

