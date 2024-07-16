<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    <router-link to="/imgTest" class="nav-button">ImageTest</router-link>
  </div>

</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import apiClient from "@/axiosConfig";

export default {
  name: 'MatchingPage',
  data(){
    return{
      users: []
    }
  },
  methods:{
    async moreUser(){
      await apiClient.get('users/matches').then(data => this.users = data).catch(err => console.log(err.message))
    }
  },
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
