import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/components/01_atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/02_molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/03_organisms"),
      "@templates": path.resolve(__dirname, "./src/components/04_templates"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      }
    }
  }
});
