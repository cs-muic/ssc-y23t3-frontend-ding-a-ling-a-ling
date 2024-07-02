/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css' // For Material Design Icons
import 'vuetify/styles' // Core Vuetify styles

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // Import all components
import * as directives from 'vuetify/directives' // Import all directives

// Export a single Vuetify instance configuration
export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light', // Set default theme to dark
  },
  // Add other Vuetify options as needed
})
