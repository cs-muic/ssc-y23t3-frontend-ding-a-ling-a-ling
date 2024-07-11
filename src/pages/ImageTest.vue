<template>
  <form @submit.prevent="imageTest">
    <!-- Your file upload UI -->
    <v-file-input
        v-model="file"
        accept="image/png, image/jpeg, image/bmp"
        label="Profile Picture"
        placeholder="Upload Profile Picture"
        prepend-icon="mdi-camera"
    ></v-file-input>

    <v-card-item>
      <v-text-field v-model="username" type="text" placeholder="username" ></v-text-field>
    </v-card-item>

    <!-- Submit button -->
    <v-btn type="submit" color="primary">Submit</v-btn>
  </form>
</template>

<script>
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { ref } from 'vue';

export default {
  name: 'ImageTest',
  setup() {
    const file = ref(null);
    const username = ref('');

    const imageTest = async () => {
      try {
        // Check if token exists in localStorage
        // const token = localStorage.getItem('token');
        // if (!token) {
        //   console.error('No token found, please log in');
        //   return;
        // }

        // Create FormData object and append file data
        const formData = new FormData();

        formData.append('file', file.value);

        // Send POST request to upload endpoint
        const response = await apiClient.post('/test/imgTest', formData)
        console.log('Upload response:', response.data);

        // Optionally reset file input after successful upload
        file.value = null;
      } catch (error) {
        console.error('Upload failed:', error);
        // Handle error as needed
      }
    };

    return { file, imageTest };
  }
};
</script>

<style scoped>
/* Add any scoped styles you need for your component */
</style>
