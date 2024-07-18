<script>
import apiClient from 'axios'
import { ref } from 'vue'

// apiClient.get('/matches')
//   .then(response => {
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.error('Failed to get matches:', error.response ? error.response.data : error)
//     alert(`Failed to get matches: ${error.response ? error.response.data.message : 'Network or server error'}`)
//   }
</script>

<template>
  <v-container class="w-lg-50">
    <div class="d-flex justify-center ga-3">
      <div>
        <v-btn variant="flat" class="px-1 rounded-pill border-thin text-lg" to="signup">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <a href="signup" class="text-decoration-none">
          <v-btn variant="flat" class="rounded-pill  border-thin text-lg">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </a>
      </div>
      <div class="flex">
        <v-card color="white" variant="flat" class=" border-radius border-thin w-100 h-100 my-auto px-8">
          <div class="mb-6"></div>
        </v-card>
      </div>
      <div>
        <v-btn variant="flat" class="rounded-pill  border-thin text-lg" to="signup">
          <v-icon>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </div>
    </div>

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
