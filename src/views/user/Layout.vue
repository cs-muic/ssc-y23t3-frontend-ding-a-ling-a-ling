<template>
  <v-app >
    <Header/>
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from '@/components/user/UserFooter.vue'
import Header from '@/components/user/UserHeader.vue'
</script>

