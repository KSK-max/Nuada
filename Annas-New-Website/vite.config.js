import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    proxy: {
      "/config": {
        target: "http://localhost:5252",
        secure: false,
      },
      "/create-payment-intent": {
        target: "http://localhost:5252",
        secure: false,
      },
    },
  },
  });
