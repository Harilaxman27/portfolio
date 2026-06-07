import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Ensure Nitro uses the Vercel preset for production builds
  nitro: process.env.NODE_ENV === "production" ? { preset: "vercel" } : true,
});