import { Home, Layout, SignIn, SignUp } from '@/views'
// import { meta } from '@typescript-eslint/eslint-plugin'

export default {
  path: '/',
  component: Layout,
  children: [
    { path: '', redirect: 'home' },
    { path: 'home', component: Home, meta: { overflow: 'hidden' } },
    { path: 'signin', component: SignIn, meta: { overflow: 'hidden' } },
    { path: 'signup', component: SignUp },
  ],
}
