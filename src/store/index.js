import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    config: {},
    windowSize: {},
    pageHeaderText: 'Loading...'
  },
  actions,
  getters,
  mutations,
  strict: true
})
