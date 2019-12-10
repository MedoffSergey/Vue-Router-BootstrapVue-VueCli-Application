import Vue from 'vue'
import App from './App'
import router from './router'

//BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'; //Импортируем axios для связи с Бэкендом

Vue.config.productionTip = false

Vue.prototype.$http = axios
localStorage.setItem('token','test')  //  Запишем токен в localStorage
const token = localStorage.getItem('token') // получим токен из localStorage  

if (token) {
    Vue.prototype.$http.defaults.headers.common['Auth-Token'] = token
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
