import Vue from 'vue'
import App from './App.vue'
import vueLfxTest from './lib/vue-lfx-test.js'
Vue.use(vueLfxTest)

new Vue({
  el: '#app',
  render: h => h(App)
})
