<template>
  <v-app class="lock">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

</script>

<style>
/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}

*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #F1E0DF;
  border: 1px inset #2B201A;
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
  border: 1px solid #2B201A;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #DC2D2D;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #DC2D2D;
}
</style>
