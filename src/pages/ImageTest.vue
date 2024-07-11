<!--This is the file where you can test the image upload functionality-->
<template>
  <form @submit.prevent="imageTest">
    <v-card
        color="red-darken-1"
        variant="outlined"
        class="mb-2"
    >
      <v-card-item class="my-5 ">

        <div class="mx-auto d-flex flex-row">
          <div class="mx-5">
            <v-avatar color="red-lighten-2" size="100">
              <v-icon size="80" color="red-lighten-4" icon="mdi-account-circle"></v-icon>
            </v-avatar>
          </div>
          <v-col class="flex-0-1">
            <v-file-input
                v-model="profilePicture"
                accept="image/png, image/jpeg, image/bmp"
                label="Profile Picture"
                placeholder="Upload Profile Picture"
                prepend-icon="mdi-camera"
            ></v-file-input>
          </v-col>
        </div>
      </v-card-item>
    </v-card>
    <v-card color="secondary" variant="tonal">
      <v-card-actions>
        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-card-actions>
    </v-card>

  </form>

</template>


<script>
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ImageTest',
  setup() {
    const profilePicture = ref('');

    const imageTest = async () => {
      try {
        const response = await apiClient.post('/imageTest', {profilePicture: profilePicture.value});
        console.log('Test response:', response.data); // Logging response data
      }
      catch (error) {
        console.error('Error:', error); // Logging error
      }
    };

    return { profilePicture, imageTest };
  }
};
</script>