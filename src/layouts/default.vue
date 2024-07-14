<template>
  <v-app>
    <HomeHeader/>
    <v-main>
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/example/AppFooter.vue'
</script>
