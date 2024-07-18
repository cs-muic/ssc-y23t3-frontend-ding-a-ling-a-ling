import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores'
import userRoutes from './user.routes'
import homeRoutes from './home.routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    // Home views = landing page, sign in, sign up
    { ...homeRoutes },

    // User views = match, edit, profile
    { ...userRoutes },

    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/', '/home', '/signin', '/signup']
  const authStore = useAuthStore()

  const authRequired = !publicPages.includes(to.path)
  const isLoggedIn = !!authStore.user

  // Redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !isLoggedIn) {
    authStore.returnUrl = to.fullPath
    return next('/home')
  }

  // Redirect logged in users away from public pages
  if (isLoggedIn && publicPages.includes(to.path)) {
    return next('/user/match')
  }
  const meta = to.meta
  const html = document.documentElement

  // Apply overflow style based on route meta
  if (meta?.overflow) {
    html.style.overflow = 'hidden'
  } else {
    html.style.overflow = ''
  }

  // Scroll to top
  window.scrollTo(0, 0)

  next() // Proceed with the navigation
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
