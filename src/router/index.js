import Vue from 'vue'
import Router from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout'
import AdminLayout from '@/layouts/AdminLayout'
import AccountLayout from '@/layouts/AccountLayout'

import Home from '@/pages/home/Main'
import About from '@/pages/about/Main'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
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
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: []
  },
  {
    path: '/account',
    component: AccountLayout,
    children: []
  }
]

export const router = new Router({
  mode: 'history',
  routes
})
