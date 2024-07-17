<template>
  <v-app >
    <Header/>
    <v-main>
      <router-view />
    </v-main>
    <Alert/>
    <Footer/>
  </v-app>
</template>

<script lang="ts" setup>
import Alert from '@/components/Alert.vue';
import Footer from '@/components/HomeFooter.vue'
import Header from '@/components/HomeHeader.vue'
</script>

