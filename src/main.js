import Vue from 'vue'
import App from './App.vue'
//依赖
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)

import vueImgSort from './lib/index'
Vue.use(vueImgSort)

new Vue({
  el: '#app',
  render: h => h(App)
})
