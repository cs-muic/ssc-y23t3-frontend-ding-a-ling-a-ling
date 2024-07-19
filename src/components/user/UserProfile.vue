<script>
import { ref, onMounted } from 'vue';
import apiClient from '@/axiosConfig';
import { jwtDecode } from 'jwt-decode';
import UserProfileCard from './UserProfileCard.vue';

export default {
  setup() {
    // Parse the user object from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user);

    const username = ref('');
    const profileData = ref({
      displayName: '',
      profilePicture: '',
      contact: '',
      biography: '',
      base64Image: '', // Added field for base64 image
    });

    if (user && user.token) {
      const decodedToken = jwtDecode(user.token);
      console.log('Decoded Token:', decodedToken);
      username.value = decodedToken.sub;  // Assuming the username is stored in the 'sub' claim
    }

    console.log('Parsed username:', username.value);

    const loadProfile = async () => {
      const token = user ? user.token : '';
      console.log('Token:', token);

      // Check token and set Authorization header
      if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        console.error('No token found');
        return;
      }

      try {
        // Log the request payload
        const payload = { username: username.value };
        console.log('Request payload:', payload);

        const response = await apiClient.post('/user/profile', null, {
          params: payload
        });
        console.log('Profile response:', response.data);
        const data = response.data;

        // Update the profileData ref with the response data
        profileData.value = data;
        loadImage(); // Load image after profile data is loaded
      } catch (error) {
        console.error('Failed to load profile:', error.response ? error.response.data : error);
        alert(`Failed to load profile: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };

    const loadImage = async () => {
      try {
        const response = await apiClient.get('/user/images', {
          params: { username: username.value }
        });
        console.log('Image response:', response.data);
        profileData.value.base64Image = response.data;
      } catch (error) {
        console.error('Failed to load image:', error.response ? error.response.data : error);
        alert(`Failed to load image: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };

    onMounted(loadProfile);

    return {
      username,
      profileData,
      loadImage,
    };
  },
};
</script>

<template>

  <UserProfileCard v-bind:displayName="profileData.displayName" v-bind:biography="profileData.biography" v-bind:age="age"
    v-bind:contacts="profileData.contact" v-bind:imgSrc="`data:image/png;base64,${profileData.base64Image}`" v-bind:dislikes="dislikes" />

</template>

<style scoped>
.border-radius {
  border-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}

.content {
  height: 45vh;
}
</style>
