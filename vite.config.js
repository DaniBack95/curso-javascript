import { defineConfig } from "vite";
export default defineConfig({
  root: "./src",
  base: "./",
  mode: "development",
  publicDir: "./public",
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true, 
  },
  server: {
    open: false, 
    port: 5173,
  },
});