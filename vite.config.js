import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
  tailwindcss()],
=======
  plugins: [react(),
    tailwindcss()
  ],
>>>>>>> 812055899e147cf74493707ee0239acf8077e136
})
