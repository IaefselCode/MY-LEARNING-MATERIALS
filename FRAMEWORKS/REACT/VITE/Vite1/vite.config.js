import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";

// https://vite.dev/config/
export default defineConfig({ 
  plugins: [react(), qrcode()],
  //changing the default server port
  server: {
    port: 3000,
  },
  //Changing the directory where application is built
  build: {
    outDir: "out",
  },
});
