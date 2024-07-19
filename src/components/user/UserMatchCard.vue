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
  <div class="match-card-column-container">
    <v-card max-width="700" class=" rounded-lg border mb-4">
      <v-card-item class="">
        <div class="text-primary text-h5 font-weight-medium text-center">
          Today's Matches
        </div>
        <div class="text-primary text-caption font-weight-regular text-center my-0">
          {{ displayName }} hates the same things.
        </div>
      </v-card-item>
    </v-card>

    <v-card max-width="700" class="rounded-lg border">
      <v-card-item class="mt-1 mb-0 pb-0">
        <v-img class="rounded" aspect-ratio="4/3" cover :src="`data:image/png;base64,${imgSrc}`"></v-img>
      </v-card-item>

      <v-container class="m-0 pt-5">
        <div>
          <div class="text-h5 font-weight-medium">
            {{ displayName }} {{ age }}
          </div>
          <hr>
          <div class="mb-3"></div>

          <div class="text-body-2 text-break">
            {{ biography }}
          </div>

          <div class="mb-3"></div>

          <div class="text-caption text-center">
            {{ contacts }}
          </div>
        </div>
      </v-container>
    </v-card>
    <v-card max-width="700" class="mt-2 rounded-lg border">
      <v-card-item class="text-caption font-weight-medium text-center">
        What They Hate
      </v-card-item>
      <hr>
      <v-card-item class="">
        <v-row>
          <v-col cols="12">
            <v-chip v-for="(dislike, index) in dislikes" :key="index" class="ma-2 hate-text font-weight-regular">
              {{ dislike }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>


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


/* Include the CSS here or in a separate file */
.match-card-column-container {
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Vertically align content to the middle */
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: -5%;
  height: 100vh;
  /* Ensure the container takes at least the full height of the viewport */
}

.match-card-column-container>* {
  width: 100%;
}

.hate-text {
  /* background-color: #DC2D2D; */
  border-width: 1px;
  font-size: 10px;
}

/* @import url("node_modules/@egjs/vue3-flicking/dist/flicking.css"); */
</style>
