<script>
import apiClient from 'axios'
import { ref } from 'vue'

</script>

<script setup>
import { ref } from 'vue'
  defineProps({
    displayName: String,
    biography: String,
    age: Number,
    contacts: String,
    imgSrc: String,
    dislikes: Array,
  })
</script>

<template>
  <v-card max-width="500" class="w-100">
    <v-container>
      <img class="profile-picture" src="https://i.ytimg.com/vi/P9XSpiWZztY/maxresdefault.jpg" alt="Google Photos" />
    </v-container>
    <v-container class="mt-0">
      <div>
        <div class="text-h5">
          {{ displayName }} {{ age }}
        </div>
        <div>
          <div class="text-h6">
            {{ dislikes }}
          </div>
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

/* @import url("node_modules/@egjs/vue3-flicking/dist/flicking.css"); */

.content {
  height: 45vh;
}
</style>
