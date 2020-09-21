import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

//Vuex Store
import { store } from './vuex'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'


Vue.config.productionTip = false

new Vue({
  router: routes,
  store: store,
  render: h => h(App),
}).$mount('#app')

