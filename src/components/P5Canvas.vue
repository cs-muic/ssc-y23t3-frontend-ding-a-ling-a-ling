<!-- src/components/P5Sketch.vue -->
<template>
  <v-container>
    <div ref="sketchContainer" class="sketch-container" />
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import useP5Sketch from './P5Sketch'

  export default defineComponent({
    name: 'P5Sketch',
    setup () {
      const { sketchContainer } = useP5Sketch()

      return {
        sketchContainer,
      }
    },
  })
</script>

<style scoped>
.sketch-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.v-container {
  width: 100%;
  height: 50%;
  /* Or any height you want the container to have */
  padding: 0;
  margin: 0;
}
</style>
