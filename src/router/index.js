import Vue from 'vue'
import Router from 'vue-router'

import account from './account'
import admin from './admin'
import base from './base'

import { store } from '@/store'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    account,
    admin,
    base
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (from.path === to.path) {
      // don't rescroll, this is a query change (or something similar)
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  store.commit('init')
  store.getters.ready.then(() => {
    next()
  })
})
