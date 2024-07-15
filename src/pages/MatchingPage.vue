<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    <router-link to="/imgTest" class="nav-button">ImageTest</router-link>
  </div>

  <div>
    <v-container>
      <v-row>
        <v-col class="mx-auto" cols="12" sm="8" md="8" lg="8" xl="8">
          <v-card color="blue lighten-1" class="mb-4">
            <v-card-title>Image Test Page</v-card-title>
            <v-card-text>
              <v-text-field
                  v-model="username"
                  label="Enter Username"
                  placeholder="Username"
              ></v-text-field>
              <v-btn @click="fetchImages">Fetch Images</v-btn>
            </v-card-text>
          </v-card>
          <v-row>
            <v-col v-for="(imageUrl, index) in imageUrls" :key="index" cols="12" md="4">
              <v-img :src="imageUrl" :alt="'Image ' + (index + 1)"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'MatchingPage',
  setup() {
    const router = useRouter();
    const imageUrls = ref([]);
    const username = ref('');

    async function fetchImages() {
      if (!username.value) {
        alert('Please enter a username');
        return;
      }
      try {
        const response = await axios.get(`/user/img/${username.value}`);
        if (response.status === 200) {
          const base64Images = response.data;
          convertToImageUrls(base64Images);
        } else {
          console.error('Failed to fetch images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    function convertToImageUrls(base64Images) {
      base64Images.forEach((base64Image) => {
        const imageUrl = `data:image/png;base64,${base64Image}`; // Adjust MIME type if needed
        imageUrls.value.push(imageUrl);
      });
    }

    return { fetchImages, imageUrls, username };
  }
}
</script>

<style scoped>
.matching {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #FF0000FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.nav-button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #0000FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}
</style>
