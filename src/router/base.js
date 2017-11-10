import BaseLayout from '@/layouts/BaseLayout'

// Pages
import Home from '@/pages/home/Main'
import About from '@/pages/about/Main'

export default {
  path: '/',
  component: BaseLayout,
  children: [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
        icon: 'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About',
        icon: 'bubble_chart'
      }
    }
  ]
}
