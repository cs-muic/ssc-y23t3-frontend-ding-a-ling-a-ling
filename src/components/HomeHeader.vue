<script setup>
import Logo from '../assets/common/logo.svg'
import Cross from '../assets/common/cross.svg'
import Heart from '../assets/common/heart.svg'
</script>

<template>
  <v-toolbar class="px-16" id="nav">
    <v-toolbar-title
    class="ml-4 pt-1"
    >
      <router-link to="/" tag="span" style="cursor: pointer">
        <Logo class="mr-1"/>
        <Cross class="mr-1"/>
        <Heart class=""/>
      </router-link>

    </v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only mr-4">
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

export default {
  data () {
    return {
      isSignUp: false,
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
  position: fixed;
}
</style>
