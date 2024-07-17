import { Edit, Layout, Match, Profile } from '@/views/user'

export default {
  path: '/user',
  component: Layout,
  children: [
    { path: '', redirect: 'match' },
    { path: 'match', component: Match },
    { path: 'edit', component: Edit },
    { path: 'profile', component: Profile },
  ],
}
