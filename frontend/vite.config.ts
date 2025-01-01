import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: parseInt(process.env.FRONTEND_PORT || "3000"),
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $app: fileURLToPath(new URL("./src/app", import.meta.url)),
      $admin: fileURLToPath(new URL("./src", import.meta.url)),
      $assets: fileURLToPath(new URL("./src/shared/assets", import.meta.url)),
      $page: fileURLToPath(new URL("./src/page", import.meta.url)),
      $entities: fileURLToPath(new URL("./src/shared/entities", import.meta.url)),
      $contexts: fileURLToPath(new URL("./src/contexts", import.meta.url)),
      $middlewares: fileURLToPath(new URL("./src/shared/middlewares", import.meta.url)),
      $abstracts: fileURLToPath(new URL("./src/shared/assets/styles", import.meta.url)),
      $styles: fileURLToPath(new URL("./src/shared/assets/styles", import.meta.url)),
      $fonts: fileURLToPath(new URL("./src/shared/assets/fonts", import.meta.url)),
      $icons: fileURLToPath(new URL("./src/shared/assets/icons", import.meta.url)),
      $slices: fileURLToPath(new URL("./src/shared/states/slices", import.meta.url)),
      $states: fileURLToPath(new URL("./src/shared/states", import.meta.url)),
      $helpers: fileURLToPath(new URL("./src/shared/helpers", import.meta.url)),
      $locales: fileURLToPath(new URL("./src/shared/locales", import.meta.url)),
      $fragments: fileURLToPath(new URL("./src/shared/fragments", import.meta.url)),
      $uis: fileURLToPath(new URL("./src/shared/UIs", import.meta.url)),
      $types: fileURLToPath(new URL("./src/shared/types", import.meta.url))
    }
  }
})
