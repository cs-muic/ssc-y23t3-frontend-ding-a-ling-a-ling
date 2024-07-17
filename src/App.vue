<template>
  <v-app class="lock">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores';
const authStore = useAuthStore();
</script>

<style>
/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
/** {
  scrollbar-width: thin;
  scrollbar-color: #DC2D2D #F1E0DF;
}*/

/* .lock {
  overflow: hidden;
} */

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #F1E0DF;
}

*::-webkit-scrollbar-track:hover {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-track:active {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #DC2D2D;
  border: 1px solid #543E33;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #DC2D2D;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #DC2D2D;
}
</style>
