import { createResolver } from "@nuxt/kit"

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "mobile-web-app-status-bar-style", content: "black-translucent" },
        {
          hid: "fragment",
          name: "fragment",
          content: "!"
        }
      ]
    }
  },
  alias: {
    "ui": resolve(__dirname, ".")
  },
  imports: {
    dirs: ["components", "composables", "utils"]
  }
})
