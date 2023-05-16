import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react()],
});
