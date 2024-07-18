<script>
import apiClient from "axios";
import { ref } from "vue";
</script>

<script setup>
import { ref } from "vue";
defineProps({
  displayName: String,
  biography: String,
  age: Number,
  contacts: String,
  imgSrc: String,
  dislikes: Array,
});
</script>

<template>
  <div class="d-flex flex-column align-center">
    <v-sheet max-width="700" class="w-100 rounded-lg border mb-4">
      <v-card-item class="">
        <div class="text-primary text-h5 font-weight-medium text-center">
          Today's Matches
        </div>
        <div
          class="text-primary text-caption font-weight-regular text-center my-0"
        >
          {{ displayName }} hates the same things.
        </div>
      </v-card-item>
    </v-sheet>

    <v-card max-width="700" class="w-100 rounded-lg border">
      <v-card-item class="m-0">
        <v-img :width="300" aspect-ratio="4/3" cover :src="imgSrc"></v-img>
      </v-card-item>

      <v-container class="m-0">
        <div>
          <div class="text-h5">{{ displayName }} {{ age }}</div>
          <div>
            <div class="text-h6">
              {{ contacts }}
            </div>
            <div class="text-h6">
              {{ age }}
            </div>

            <div class="text-h5">
              {{ biography }}
            </div>
          </div>
        </div>
      </v-container>
    </v-card>
    <v-sheet max-width="700" class="mt-2 w-100 rounded-lg border mb-4">
      <v-card-item class="text-caption text-center">
        What they hate
      </v-card-item>

      <v-card-item class="text-caption">
        <v-row>
          <v-col cols="12">
            <v-chip
              v-for="(dislike, index) in dislikes"
              :key="index"
              class="ma-2 hate-text"
            >
              {{ dislike }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-item>
    </v-sheet>
  </div>
</template>

<style scoped>
.border-radius {
  border-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}

.profile-picture {
  object-fit: cover;
  width: 100%;
  height: 30vh;
  border-radius: 2px;
}

.hate-text {
  /* background-color: #DC2D2D; */
  border-width: 1px;
  font-size: small;
}

/* @import url("node_modules/@egjs/vue3-flicking/dist/flicking.css"); */
</style>
