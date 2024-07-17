import { Layout, SignIn, SignUp } from '@/pages/account'

export default {
  path: '/account',
  component: Layout,
  children: [
    { path: 'signin', component: SignIn },
    { path: 'signup', component: SignUp },
  ],
}
