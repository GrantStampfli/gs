import Vue from 'vue'
import Vuetify from 'vuetify'
import './assets/stylus/main.styl'

import App from './App'
import VueFire from 'vuefire'
import Globals from './globals'
import { store } from './store'
import { router } from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.use(VueFire)
Vue.use(Globals)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
