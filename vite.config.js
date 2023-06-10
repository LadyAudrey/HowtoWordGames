import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //if I want to deploy, uncomment the below
  // base: "/HowtoWordGames/",
});
