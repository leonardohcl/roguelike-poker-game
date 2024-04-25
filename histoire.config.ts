import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import path from "path";

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [HstVue()],
  tree: {
    groups: [
      { id: "design", title: "Design" },
      { id: "class", title: "Classes" },
      { id: "atom", title: "Atoms" },
      { id: "molecule", title: "Molecules" },
      { id: "organism", title: "Organism" },
    ],
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
