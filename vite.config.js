import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const fileNames = [null, "global", "pages", "assets"];

const filePaths = fileNames.reduce((acc, cur) => ({
  ...acc,
  [cur]: `/src/${cur}/`
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filePaths
    }
  }
})
