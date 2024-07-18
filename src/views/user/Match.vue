<template>
  <div class="content d-flex justify-center align-center">
<!--    <HeroHomeCard/>-->
    <div class="matching">
      <h1>Find Someone to Hate with</h1>
      <router-link to="/edit-profile" class="button">Edit Profile</router-link>
      <v-btn @click="this.moreUser" color="primary">Get more Matches</v-btn>
    </div>
    <v-card
      class="mx-auto"
      elevation="24"
      max-width="400"
    >
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        delimiter-icon="mdi-square"
        height="500"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(user, i) in this.users"
          :key="i"
        >
          <v-sheet
            height="100%"
            tile
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                <h2>{{user.displayName}}</h2>
                <p>{{user.dislikes}}</p>
                <p>{{user.preferences}}</p>
                <p>{{user.age}}</p>
                <p>{{user.height}}</p>
              </div>
              <v-img source="this.getImage" alt="">

              </v-img>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-col class="text-center">
    </v-col>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
 .content {
   padding-top: 70px;
   padding-right: 80px;
   padding-left: 80px;
   padding-bottom: 55px;
   height: 100vh;
 }

</style>

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
    },
    async getImage(){
      await axios.get('user/image/')
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
