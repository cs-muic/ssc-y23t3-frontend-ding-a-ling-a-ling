<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: {
    Flicking: Flicking
  }
}
</script>

<template>
  <v-container>
    <v-col class="">


    </v-col>
<v-card color="primary" variant="flat" class=" border-radius border-thin w-100 h-100 my-auto px-8">
    <div class="mb-12"></div>

    <v-card-item>
      <div class="text-h6 font-weight-regular text-center text-capitalize">
        Your Matches
      </div>
      <div class="mb-4"></div>

      <v-carousel>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title class="text-h6 font-weight-regular">Card with image</v-card-title>
              <v-card-text>
                <span class="text-h6 font-weight-regular">This is a card with a cover image.</span>
              </v-card-text>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>

    </v-card-item>
    <div class="mb-7"></div>
  </v-card>
</v-container>
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
