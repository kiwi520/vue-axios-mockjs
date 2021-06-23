import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mockjs/index'
// import axios from 'axios'
import HttpClient from '@/plugins/http.js'

Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.use(HttpClient)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
