import { Home, Layout, SignIn, SignUp } from '@/views'

export default {
  path: '/',
  component: Layout,
  children: [
    { path: '', redirect: 'home' },
    { path: 'home', component: Home },
    { path: 'signin', component: SignIn },
    { path: 'signup', component: SignUp },
  ],
}
