import federation from "@originjs/vite-plugin-federation";
import node_package from "./package.json";

export default {
  input: "src/index.js",
  plugins: [
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
};
