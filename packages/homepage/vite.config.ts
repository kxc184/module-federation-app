import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import node_package from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "homepage-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./homepage": "./src/App.tsx",
      },
      shared: node_package.dependencies,
    }),
  ],
});
