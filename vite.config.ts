import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // 👈 important for Vercel deployment (ensures correct paths)
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Disabled locally to avoid interfering with JSX runtime
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
