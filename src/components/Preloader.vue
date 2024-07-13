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
