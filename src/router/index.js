/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';  // Ensure this path is correct
import Login from '@/pages/Login.vue';  // Ensure this path is correct
import SignUp from "@/pages/SignUp.vue";
import MatchingPage from "@/pages/MatchingPage.vue";
import EditProfile from "@/pages/EditProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage },
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/matching', component: MatchingPage},
    {path: '/edit-profile', component: EditProfile}
  ],
});

export default router;




