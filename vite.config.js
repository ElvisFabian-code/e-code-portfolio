import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or whichever React plugin you are using

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true // This tells the build tool to safely drop the IE7 hacks instead of crashing
    }
  }
});