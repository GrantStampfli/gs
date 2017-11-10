import AccountLayout from '@/layouts/AccountLayout'
import AccountMain from '@/pages/account/Main'
import Login from '@/pages/account/Login'
import Register from '@/pages/account/Register'

export default {
  path: '/account',
  component: AccountLayout,
  children: [
    {
      path: '',
      component: AccountMain,
      children: [
        {
          path: '',
          name: 'account',
          redirect: 'login'
        },
        {
          path: '/login',
          redirect: 'login'
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: {
            title: 'Login',
            icon: 'person'
          }
        },
        {
          path: '/register',
          redirect: 'register'
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
          meta: {
            title: 'Register',
            icon: 'person_add'
          }
        }
      ]
    }
  ]
}
