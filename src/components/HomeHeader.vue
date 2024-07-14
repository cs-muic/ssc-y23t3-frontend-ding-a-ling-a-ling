<script setup>
import Logo from '../assets/common/logo.svg'
import Cross from '../assets/common/cross.svg'
import Heart from '../assets/common/heart.svg'
</script>
<template>
  <v-toolbar
    class="py-2 pe-8" id="nav"
  >
    <v-toolbar-title
    class="mx-0"
    >
      <router-link to="/" tag="span" style="cursor: pointer">
        <Logo class="mr-1"/>
      </router-link>
      <Cross class="mr-1"/>
      <Heart class=""/>
    </v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import AppFooter from '@/components/example/AppFooter.vue'

export default {
  name: 'App',
  components: { AppFooter },
  data () {
    return {
      sidebar: false,
      menuItems: [
        {
          title: 'Sign Up',
          path: '/signup',
        },
        {
          title: 'Sign In',
          path: '/signin',
        }
      ]
    }
  },
}
</script>
<style>
#nav {
  z-index: 999;
  backdrop-filter: blur(20px);
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 67%, rgba(255,255,255,0.8211659663865546) 89%, rgba(255,255,255,0.3085609243697479) 100%);}
</style>
