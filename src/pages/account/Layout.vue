<template>
  <v-app >
    <AppHeader/>
    <v-main>
      <v-text>
        
      </v-text>
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

