import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (vcguva.com) uses root base; relative base also works on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
