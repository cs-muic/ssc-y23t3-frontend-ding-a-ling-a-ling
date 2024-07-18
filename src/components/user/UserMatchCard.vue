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
  <v-container>
    <v-col class="">


    </v-col>
<v-card color="primary" variant="flat" class=" border-radius border-thin w-100 h-100 my-auto px-8">
    <div class="mb-6"></div>

    <v-card-item>
      <div class="text-h6 font-weight-regular text-center text-capitalize">
        Your Matches
      </div>
      <div class="mb-4"></div>
    </v-card-item>

    <v-card-item>
      <div>{{ displayName }}</div>
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
