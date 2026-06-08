import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { progressDirective, revealDirective, staggerDirective, tiltDirective } from './directives/motion'

createApp(App)
  .directive('reveal', revealDirective)
  .directive('stagger', staggerDirective)
  .directive('progress', progressDirective)
  .directive('tilt', tiltDirective)
  .mount('#app')
