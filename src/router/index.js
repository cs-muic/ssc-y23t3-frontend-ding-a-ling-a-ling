import { createRouter, createWebHistory } from 'vue-router'

// import { Home } from '@/views'
import userRoutes from './user.routes'
import homeRoutes from './home.routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { ...homeRoutes },
    { ...userRoutes },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach(async to => {
  const publicPages = ['/', '/home', '/signin', '/signup']
  const authRequired = !publicPages.includes(to.path)
  const isLoggedIn = !!localStorage.getItem('user')
  

  if (authRequired && !isLoggedIn) {
    return '/'
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
