import { Edit, Layout, Match, Profile } from '@/pages/user'

export default {
  path: '/user',
  component: Layout,
  children: [
    { path: '', component: Match },
    { path: 'edit', component: Edit },
    { path: 'profile', component: Profile },
  ],
}
