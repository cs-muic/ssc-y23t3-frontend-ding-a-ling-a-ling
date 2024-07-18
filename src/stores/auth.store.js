import { defineStore } from 'pinia'

import apiClient from '@/axiosConfig'
import { router } from '@/router'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async signIn (username, password) {
      try {
        const response = await apiClient.post('/signin', {
          username,
          password,
        })
        const { token } = response.data
        if (token) {
          this.user = { username: username.value, token } // Store the auth store.

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', token)

          apiClient.defaults.headers.common.Authorization = `Bearer ${token}`

          console.log('token in use' + localStorage.getItem('token'))
          console.log('Logged in successfully')

          // Redirect to user page(the default log in page).
          // router.push('/user/match')
          router.push('/user/match')
        } else {
          console.error('No token received from server')
          alert('Failed to log in, no token received')
        }
      } catch (error) {
        console.error(
          'Sign-In failed:',
          error.response ? error.response.data : error
        )
        alert(`Sign-In failed: Invalid email or password.`)
      }
    },
    signOut () {
      this.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      router.push('/')
    },
  },
})
