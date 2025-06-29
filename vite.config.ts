// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".ngrok-free.app"], // permite cualquier subdominio de ngrok
    host: true,
    proxy: {
      "/api/transactions": {
        target: "https://uala-dev-challenge.s3.us-east-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/transactions/, "/transactions.json"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
