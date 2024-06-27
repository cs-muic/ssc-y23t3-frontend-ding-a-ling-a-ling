/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { vuetify } from '@/plugins/vuetify'

// Components

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(vuetify)

app.mount('#app')


