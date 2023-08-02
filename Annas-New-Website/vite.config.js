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
        target: "https://nuada.vercel.app/",
        secure: false,
      },
      "/create-payment-intent": {
        target: "https://nuada.vercel.app/",
        secure: false,
      },
    },
  },
  });
