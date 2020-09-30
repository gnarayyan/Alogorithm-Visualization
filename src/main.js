import Vue from 'vue'
import App from './App.vue'

export const sortEventBus = new Vue();
export const lineDensityBus = new Vue();
export const moveLineBus = new Vue();
export const execSpeedBus = new Vue();
export const searchCallBus = new Vue();
export const sudokuBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
 