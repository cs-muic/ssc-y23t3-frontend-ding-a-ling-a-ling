<script>
import { ref, onMounted } from 'vue';
import apiClient from '@/axiosConfig'

export default {
  setup() {
    const currentUser = ref({});

    const loadProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }

      try {
        const response = await apiClient.get('/profile');
        currentUser.value = response.data;
      } catch (error) {
        console.error('Failed to load profile:', error.response ? error.response.data : error);
        alert(`Failed to load profile: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };

    onMounted(loadProfile);

    return {
      currentUser,
    };
  },
};
</script>

<template>
  <v-card color="primary" variant="flat" class="border-radius border-thin w-100 h-100 my-auto px-8">
    <div class="mb-12"></div>

    <v-card-item>
      <div class="text-h6 font-weight-regular text-center text-capitalize">
        Your Profile
      </div>
      <div class="mb-4"></div>
      <div>
        <div class="text-h5 font-weight-bold text-center">
          {{ currentUser.displayName }}
        </div>
        <div class="mb-4"></div>
        <v-avatar size="150" class="mx-auto">
          <img :src="currentUser.profilePicture" alt="Profile Picture">
        </v-avatar>
        <div class="mb-4"></div>
        <div class="text-h6 font-weight-regular">
          Contacts:
        </div>
        <div>
          {{ currentUser.contact }}
        </div>
        <div class="mb-4"></div>
        <div class="text-h6 font-weight-regular">
          Biography:
        </div>
        <div>
          {{ currentUser.biography }}
        </div>
      </div>
    </v-card-item>

    <v-card-item>
      <div class="w-100 d-flex">
        <v-btn variant="flat" class="rounded-pill mx-auto border-thin text-lg" to="edit">
          <v-icon>
            mdi-pencil
          </v-icon>
          <span>edit</span>
        </v-btn>
      </div>
    </v-card-item>

    <div class="mb-7"></div>
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

.content {
  height: 45vh;
}
</style>
