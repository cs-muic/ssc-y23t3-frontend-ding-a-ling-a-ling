/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import { createPinia } from 'pinia'
import router from '../router'
import p5vue from 'p5vue'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(createPinia())
    .use(router)
    .use(p5vue)
}
