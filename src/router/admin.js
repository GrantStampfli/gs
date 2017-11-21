import AdminLayout from '@/layouts/AdminLayout'

import Dashboard from '@/pages/admin/dashboard/Main'

export default {
  path: '/admin',
  component: AdminLayout,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: 'Admin Dashboard',
        icon: 'timeline'
      }
    }
  ]
}
