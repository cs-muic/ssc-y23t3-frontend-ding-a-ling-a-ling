<script setup>
import Logo from '../assets/common/logo.svg'
import Cross from '../assets/common/cross.svg'
import Heart from '../assets/common/heart.svg'
</script>
<template>
  <v-toolbar
    class="py-2"
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
        <v-icon left dark>{{ item.icon }}</v-icon>
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
          title: 'Home',
          path: '/home',
          icon: 'home'
        },
        {
          title: 'Sign Up',
          path: '/signup',
          icon: 'face'
        },
        {
          title: 'Sign In',
          path: '/signin',
          icon: 'lock_open'
        }
      ]
    }
  },
}
</script>
<style>

</style>
