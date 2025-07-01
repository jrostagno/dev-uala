// vite.config.ts

import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config"; //

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
  server: {
    allowedHosts: [".ngrok-free.app"],
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
