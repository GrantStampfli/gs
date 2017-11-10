import Vue from 'vue'
import Router from 'vue-router'

import account from './account'
import admin from './admin'
import base from './base'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    account,
    admin,
    base
  ]
})
