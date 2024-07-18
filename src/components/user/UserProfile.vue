<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: {
    Flicking: Flicking
  }
}
</script>

<template>
    <v-card color="primary" variant="flat" class=" border-radius border-thin w-100 h-100 my-auto px-8">
      <div class="mb-12"></div>

      <v-card-item>
        <div class="text-h6 font-weight-regular text-center text-capitalize">
         Your Profile
        </div>
        <div class="mb-4"></div>

        <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
          <div class="card-panel">1</div>
          <div class="card-panel">2</div>
          <div class="card-panel">3</div>
          <div class="card-panel">4</div>
          <div class="card-panel">5</div>
          <div class="card-panel">6</div>
          <div class="card-panel">7</div>
          <div class="card-panel">8</div>
        </Flicking>

      </v-card-item>

      <v-card-item>
        <div class="w-100 d-flex">
            <v-btn  variant="flat" class="rounded-pill mx-auto border-thin text-lg" to="edit">
              <v-icon>
              mdi-pencil
            </v-icon>
            <span>edit</span>
            </v-btn>
        </div>
      </v-card-item>

      <div class="mb-7"></div>
    </v-card>
</template>

<style scoped>
.border-radius {
  border-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}

/* @import url("node_modules/@egjs/vue3-flicking/dist/flicking.css"); */

.content {
  height: 45vh;
}
</style>
