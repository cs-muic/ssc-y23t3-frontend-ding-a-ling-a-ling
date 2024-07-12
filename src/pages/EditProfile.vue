<template>
  <v-col class="mx-auto" cols="12" sm="8" md="8" lg="8" xl="8"
  >
    <v-card
        color="red-lighten-1"
        variant="flat"
        class="mb-2"
    >
      <v-card-title class="text-h4 mt-3">Edit Profile</v-card-title>
      <div class="mb-3"></div>
    </v-card>

    <form @submit.prevent="editProfile">
      <v-card
          color="red-darken-1"
          variant="outlined"
          class="mb-2"
      >
        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-item>
          <div class="text-h6">Profile Details</div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="firstName" type="text" placeholder="First Name"></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="lastName" type="text" placeholder="Last Name"></v-text-field>
        </v-card-item>

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

<!--        <v-card-item>-->
<!--        <v-text-field v-model="profilePicture" type="text" placeholder="Profile Picture"></v-text-field><v-card-item>-->


        <v-card-item>
        <v-text-field v-model="displayName" type="text" placeholder="Display Name" ></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="phoneNumber" type="tel" placeholder="Phone Number" ></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-slider
              v-model="age"
              :max="100"
              :step="1"
              class="ma-4"
              label="Age"
              color="red-lighten-2"
              hide-details
          >
            <template v-slot:append>
              <v-text-field
                  v-model="age"
                  density=comfortable
                  style="width: 80px"
                  type="number"
                  label="Age"
                  variant="outlined"
                  hide-details
              ></v-text-field>
            </template>
          </v-slider>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="height" type="number" placeholder="Height (cm)" ></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="address" type="text" placeholder="Address" ></v-text-field>
        </v-card-item>

      </v-card>

      <v-card
          color="red-darken-1"
          variant="outlined"
          class="mb-2"
      >

        <v-card-item>
          <div class="text-h6">Account Details</div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="contact" type="text" placeholder="Contact Information" ></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="biography" type="text" placeholder="Biography" ></v-text-field>
        </v-card-item>

      </v-card>

      <v-card
          color="red-lighten-1"
          class="mb-2"
          variant="elevated"
      >
        <v-card-title class="text-h4 mt-3">Gender Preferences</v-card-title>
        <v-card-item >
            <v-container fluid mb-2>
              <v-row mt-1>
                <v-col
                    cols="12"
                    md="4"
                    sm="4"
                >
                  <v-checkbox
                      v-model="dislikes"
                      label="Male"
                      value="Male"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="dislikes"
                      label="Female"
                      value="Female"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
        </v-card-item>

        <v-card-title class="text-h4 mt-3">Dislikes</v-card-title>
        <div class="mb-2"></div>
        <v-card-item>
          <v-card-item >
            <v-container fluid>
              <v-row mt-1>
                <v-col
                    cols="12"
                    md="4"
                    sm="4"
                >
                  <v-checkbox
                      v-model="dislikes"
                      label="Smoking"
                      value="Smoking"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="dislikes"
                      label="Drinking"
                      value="Drinking"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-item>
        </v-card-item>
        <v-card-text class="text-md-subtitle-2">Powered by our patent pending love matching algorithm.</v-card-text>
        <div class="mb-1"></div>
      </v-card>


      <v-card class="mb-3" color="red-darken-1" variant="tonal">
        <v-card-actions>
          <v-btn type="submit" size="large" class="d-block flex-fill">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card color="secondary" variant="tonal">
        <v-card-actions>
          <v-btn @click="cancel()" size="large" class="d-block flex-fill">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>

    </form>
  </v-col>
</template>


<script>
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import router from "@/router";

export default {
  name: 'EditProfile',
  methods: {
    router() {
      return router
    }
  },
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const address = ref('');
    const phoneNumber = ref('');
    const age = ref(null);
    const height = ref(null);
    const displayName = ref('');
    const profilePicture = ref(null);
    const contact = ref('');
    const biography = ref('');
    const dislikes = ref([]);
    const preferences = ref([]);


    const editProfile = async () => {
      try {
        if (!localStorage.getItem('token') === null) {
          alert('You must be logged in to edit your profile');
        }


        const formData = new FormData();

        formData.append('firstName', firstName.value);
        formData.append('lastName', lastName.value);
        formData.append('address', address.value);
        formData.append('phoneNumber', phoneNumber.value);
        formData.append('age', age.value);
        formData.append('height', height.value);
        formData.append('displayName', displayName.value);
        formData.append('profilePicture', profilePicture.value);
        formData.append('contact', contact.value);
        formData.append('biography', biography.value);
        formData.append('dislikes', dislikes.value);
        formData.append('preferences', preferences.value);
        formData.append('token', localStorage.getItem('token'));

        const response = await apiClient.post('user/update', formData);

        console.log('Edit Profile response:', response.data);
        // grabbing the token back from the server (which will be in local storage)
        if (response.data) {
          alert('Profile updated successfully');
          await router.push('/matching'); // Redirect to matching page
        } else {
          console.error('Failed to update profile, no response');
          alert('Failed to update profile, no token received');
        }
      } catch (error) {
        console.error('Signup failed:', error.response ? error.response.data : error);
        alert(`Signup failed: ${error.response ? error.response.data.message : "Network or server error"}`);
      }
    };

    return { firstName, lastName, address, profilePicture,
      phoneNumber, age, height, displayName, contact, biography,
      dislikes, preferences, editProfile };
  },
  cancel() {
    router.push('/matching');
  }
};
</script>

