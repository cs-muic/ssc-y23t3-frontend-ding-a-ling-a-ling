import { createRouter, createWebHistory } from 'vue-router'

// import { Home } from '@/views'
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

router.beforeEach(async to => {
  const publicPages = ['/', '/home', '/signin', '/signup']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  // redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath
    return '/'
  }
})

router.beforeEach((to, from, next) => {
  const meta = to.meta
  // const body = document.body
  const html = document.documentElement

  if (meta?.overflow) {
    // body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
    window.scrollTo(0, 0) // Scroll to top
  } else {
    // body.style.overflow = ''
    html.style.overflow = ''
  }
  window.scrollTo(0, 0) // Scroll to top
  next()
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
