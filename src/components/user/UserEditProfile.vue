<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/axiosConfig'
import {jwtDecode} from "jwt-decode";

export default {
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const username = ref('');
    const address = ref('');
    const phoneNumber = ref('');
    const age = ref(null);
    const height = ref(null);
    const displayName = ref('');
    const profilePicture = ref('');
    const contact = ref('');
    const biography = ref('');
    const dislikes = ref([]);
    const preferences = ref([]);
    const profileData = ref({
      displayName: '',
      profilePicture: '',
      contact: '',
      biography: '',
      base64Image: '', // Added field for base64 image
    });

    let preferenceOptions = [];
    let dislikeOptions = [];

    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user);

    if (user && user.token) {
      const decodedToken = jwtDecode(user.token);
      console.log('Decoded Token:', decodedToken);
      username.value = decodedToken.sub;  // Assuming the username is stored in the 'sub' claim
    }


    onMounted(async () => {

      try {
        dislikeOptions = ['Option 1', 'Option 2'];
        preferenceOptions = ['Male', 'Female'];
      } catch (error) {
        console.error('Getting preferences and dislikes failed:', error.response ? error.response.data : error);
        alert(`Getting preferences and dislikes failed: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    });

    const onSubmit = async () => {
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
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

      try {
        const response = await apiClient.post('/user/update', formData);
        console.log('Profile update response:', response.data);
        alert('Profile updated successfully');
        await router.push('/user');
      } catch (error) {
        console.error('Profile update failed:', error.response ? error.response.data : error);
        alert(`Profile update failed: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };
    const loadImage = async () => {
      try {
        const response = await apiClient.get('/user/images', {
          params: { username: username.value }
        });
        console.log('Image response:', response.data);
        profileData.value.base64Image = response.data;
        profilePicture.value = profileData.value.base64Image;
      } catch (error) {
        console.error('Failed to load image:', error.response ? error.response.data : error);
        alert(`Failed to load image: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      username,
      address,
      profilePicture,
      phoneNumber,
      age,
      height,
      displayName,
      contact,
      biography,
      dislikes,
      preferences,
      dislikeOptions,
      onSubmit,
      loadImage,
      preferenceOptions,
    };
  },
};
</script>


<template>
<v-form @submit.prevent="onSubmit">
    <v-card color="white" variant="flat" class="border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Personal Details
          </div>
          <v-row dense>
            <v-col dense cols="12" md="6">
              <v-text-field v-model="firstName" label="First Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>


    <v-card color="white" variant="flat" class="
 border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Account Details
          </div>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" required></v-text-field>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>


    <v-card color="white" variant="flat" class="
 border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Profile
          </div>
          <v-row dense>

            <v-col cols="12" md="6">
              <v-text-field v-model="displayName" label="Display Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-photo" v-model="profilePicture"
                label="Profile Picture"></v-file-input>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="address" label="Address"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="age" label="Age" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="height" label="Height (cm)" type="number"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea v-model="biography" label="Biography"></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="contact" label="Contact Information"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-select v-model="preferences" :items="preferenceOptions" label="Preferences" multiple></v-select>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>

    <v-card color="primary" variant="flat" id="btm" class="border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div class="mb-12"></div>
          <div class="text-h4 font-weight-bold text-center text-capitalize">Tell Us What You Hate</div>

          <div class="mb-4"></div>
          <div class="text-h5 font-weight-light text-center">Its important to be honest for us to perform our magic.
          </div>
        </v-card-item>
        <v-card-item class="px-8">

          <v-row dense>
            <v-col cols="12">
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="Lifestyle" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="Hobbies" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple></v-select>
            </v-col>
          </v-row>
          <div class="mb-5"></div>

          <div class="d-flex mb-12">
            <v-btn variant="flat" height="50"
              class="rounded-pill mx-auto flex font-weight-regular border-thin text-h5 px-8" type="submit"> Sign Up
            </v-btn>
          </div>

          <div
            class="w-100 d-inline-flex  mt-auto bottom-0 mx-auto mt-auto text-center text-lg-body-1 text-caption text-break">
            <v-chip class="mx-auto text-break" id="annotation"> Powered by the
              <div class="d-inline-block mx-1"><span class="font-weight-bold"> Hate</span><span
                  class="font-weight-light">Matcher</span>™
              </div>
              <span> world leading, patent pending, cutting edge hate matching technology.</span>
            </v-chip>
          </div>

          <div class="mb-8"></div>
        </v-card-item>
      </div>


    </v-card>


  </v-form>
</template>


<style scoped>
#btm {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
