import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { revealDirective, tiltDirective } from './directives/motion'

createApp(App)
  .directive('reveal', revealDirective)
  .directive('tilt', tiltDirective)
  .mount('#app')
