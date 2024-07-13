/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import InlineSvg from 'vue-inline-svg';
import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App)
app.component('inline-svg', InlineSvg);

registerPlugins(app)

app.mount('#app')
