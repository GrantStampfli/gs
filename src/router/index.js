import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Main'
import About from '@/pages/about/Main'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      icon: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      icon: 'bubble_chart'
    }
  }
]

export const router = new Router({
  mode: 'history',
  routes
})
