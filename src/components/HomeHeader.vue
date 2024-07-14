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
import AppFooter from '@/components/example/AppFooter.vue'
import AuthDialog from '@/components/AuthDialog.vue'

export default {
  components: { AppFooter, AuthDialog},
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
  methods: {
    openSignIn() {
      this.isSignUp = false;
      this.$refs.authDialog.open();
    },
    openSignUp() {
      this.isSignUp = true;
      this.$refs.authDialog.open();
    }
  }
}
</script>
<style>
#nav {
  z-index: 999;
  //backdrop-filter: blur(20px);
  position: fixed;
  //background: rgba(255, 255, 255, 0.9);
  //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 67%, rgba(255,255,255,0.8211659663865546) 89%, rgba(255,255,255,0.3085609243697479) 100%);}
</style>
