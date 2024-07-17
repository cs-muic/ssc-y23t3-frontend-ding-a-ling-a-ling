import { createRouter, createWebHistory } from 'vue-router'

import { useAlertStore, useAuthStore } from '@/stores'
import { Home } from '@/pages'
import accountRoutes from './account.routes'
import userRoutes from './user.routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { ...accountRoutes },
    { ...userRoutes },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach(async to => {
  const alertStore = useAlertStore()
  alertStore.clear()

  const publicPages = ['/', '/account/login', '/account/register']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath
    return '/'
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
