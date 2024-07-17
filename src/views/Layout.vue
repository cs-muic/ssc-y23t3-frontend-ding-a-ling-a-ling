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
import Footer from '@/components/HomeFooter.vue'
import Header from '@/components/HomeHeader.vue'
</script>

