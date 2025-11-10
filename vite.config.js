import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cgmlti-steampunk/', // <-- temporal. Luego lo actualizamos a '/NOMBRE-REPO/' antes de publicar en GitHub Pages
  plugins: [react()]
})
