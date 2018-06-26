import Vue from 'vue'
import App from './App.vue'

import vueImgSort from './lib/index'
Vue.use(vueImgSort)

new Vue({
  el: '#app',
  render: h => h(App)
})
