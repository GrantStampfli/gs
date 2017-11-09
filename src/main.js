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

Vue.use(Vuetify)
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
