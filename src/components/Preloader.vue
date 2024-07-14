<script setup>
import Logo from '../assets/common/logo.svg'
import Cross from '../assets/common/cross.svg'
import Heart from '../assets/common/heart.svg'
</script>

<template>
  <div class="preloader">
    <v-progress-circular color="primary" indeterminate />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Preloader',
  })
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
