/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        primary: '#ffffff',
        background: '#fafafa',
        input: '#858585',
        text: '#111517'
      },
      dark: {
        primary: '#2b3945',
        background: '#202c37',
        text: '#ffffff',
        input: '#858585'
      }
    },
  },
})
